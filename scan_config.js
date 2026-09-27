const fs = require("fs");

function scanConfig(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");

    const config = JSON.parse(data);

    return {
      success: true,
      config: config
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

module.exports = scanConfig;