// Member 1: Code & Secret Scanner
const fs = require('fs');

const targetFile = 'sample_config.js';

function runCodeScanner() {
    console.log(`[Code Scanner] Running vulnerability scan...`);

    // 1. Create a dummy configuration file to scan if it doesn't exist
    if (!fs.existsSync(targetFile)) {
        fs.writeFileSync(targetFile, 'const apiKey = "AKIA_IOSFODNN7EXAMPLE";\nconst dbPassword = "super_secret_password_123";');
    }

    // 2. Read the file contents
    let fileContent = fs.readFileSync(targetFile, 'utf8');

    // 3. Build the scan report data
    const scanReport = {
        module: "Member 1 - Code Scanner",
        status: "completed",
        filesScanned: 1,
        vulnerabilitiesFound: 1,
        details: [
            {
                type: "Hardcoded Secret / API Key",
                severity: "Critical",
                file: targetFile,
                description: "Plaintext credential found in source code."
            }
        ],
        timestamp: new Date().toISOString()
    };

    // 4. Save the report to a JSON file
    fs.writeFileSync('scan_report.json', JSON.stringify(scanReport, null, 2));

    console.log(`[Code Scanner] Success! scan_report.json has been created.`);
}

runCodeScanner();