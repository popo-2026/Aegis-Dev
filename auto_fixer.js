// Upgraded Member 4: Auto-Fixer & Patch Generator
const fs = require('fs');

const targetFile = 'sample_config.js';

function patchRealFile() {
    console.log(`[Auto-Fixer] Scanning ${targetFile} for vulnerabilities...`);

    // 1. Read the real file on your computer
    if (!fs.existsSync(targetFile)) {
        console.log(`[Error] Target file not found!`);
        return;
    }

    let fileContent = fs.readFileSync(targetFile, 'utf8');

    // 2. Check if the vulnerability exists
    if (fileContent.includes('super_secret_password_123')) {
        console.log(`[Auto-Fixer] Vulnerability detected: Hardcoded password found!`);

        // 3. Automatically fix/replace the bad code with secure code
        let secureContent = fileContent.replace(
            'const dbPassword = "super_secret_password_123";', 
            'const dbPassword = process.env.DB_PASSWORD; // Patched securely by CyberShield AI'
        );

        // 4. Overwrite the file with the fixed code
        fs.writeFileSync(targetFile, secureContent, 'utf8');
        console.log(`[Auto-Fixer] Success! Security patch written directly to ${targetFile}`);

        // 5. Generate patch report for the team dashboard
        const patchReport = {
            status: "success",
            file: targetFile,
            action: "Replaced hardcoded secret with environment variable",
            timestamp: new Date().toISOString()
        };
        fs.writeFileSync('patch_report.json', JSON.stringify(patchReport, null, 2));

    } else {
        console.log(`[Auto-Fixer] No vulnerabilities found in ${targetFile}.`);
    }
}

// Run the patcher
patchRealFile();