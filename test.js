const scanConfig = require("./scan_config");
const checkCompliance = require("./scorer");

const result = scanConfig("./test-config.json");

const complianceResult = checkCompliance(result.config);

console.log(JSON.stringify(complianceResult, null, 2));