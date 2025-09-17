const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const logFile = "cypress-output.log";
const fileDir = "cypress/e2e";

// Daftar file spec yang dijalankan berurutan
const specs = [
    "information_kategory.cy.js",
].map(f => path.join(fileDir, f));

async function runTests() {
    // Kosongkan file log dulu
    fs.writeFileSync(logFile, "", "utf8");

    for (const spec of specs) {
        console.log(`\n🚀 Running spec: ${spec}\n`);

        // Jalankan perintah Cypress dengan spec tertentu
        await new Promise((resolve, reject) => {
            const command = `npx cypress run --spec ${spec}`;
            const child = exec(command, { maxBuffer: 1024 * 1024 });

            // Buat stream log ke file
            const logStream = fs.createWriteStream(logFile, { flags: "a" });

            // Pipe stdout → console + file
            child.stdout.pipe(process.stdout);
            child.stdout.pipe(logStream);

            // Pipe stderr → console + file
            child.stderr.pipe(process.stderr);
            child.stderr.pipe(logStream);

            child.on("close", (code) => {
                console.log(`\n Finished spec: ${spec} (exit code: ${code})\n`);
                logStream.end();
                resolve();
            });

            child.on("error", (err) => {
                console.error(`\n Error running ${spec}:`, err.message);
                reject(err);
            });
        });
    }

    console.log(`\n All specs finished. Full log saved in ${logFile}`);
}

runTests();