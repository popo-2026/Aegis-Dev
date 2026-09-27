const rules = require("./rules");

function checkCompliance(config) {
  const results = [];

  rules.forEach(rule => {
    let passed = false;

    if (rule.id === "SOC2-001") {
      passed = config.authentication === true;
    }

    if (rule.id === "SOC2-002") {
      passed = config.encryption === true;
    }

    if (rule.id === "SOC2-003") {
      passed = config.logging === true;
    }

    if (rule.id === "SOC2-004") {
      passed = config.access_control === true;
    }

    results.push({
      rule_id: rule.id,
      rule_name: rule.name,
      status: passed ? "PASS" : "FAIL",
      severity: rule.severity,
      fix: rule.fix
    });
  });

  const passed = results.filter(result => result.status === "PASS").length;
  const total = results.length;
  const score = (passed / total) * 100;
  let overallStatus = score === 100 ? "PASS" : "NEEDS_REVIEW";

  return {
  score: score,
  overallStatus: overallStatus,
  results: results
};
}

module.exports = checkCompliance;