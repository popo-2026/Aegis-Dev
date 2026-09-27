const soc2Rules = [
  {
    id: "SOC2-001",
    name: "Authentication",
    description: "Authentication must be enabled",
    severity: "HIGH",
    fix: "Enable authentication"
  },
  {
    id: "SOC2-002",
    name: "Encryption",
    description: "Encryption must be enabled",
    severity: "HIGH",
    fix: "Enable encryption"
  },
  {
    id: "SOC2-003",
    name: "Security Logging",
    description: "Security logging must be enabled",
    severity: "MEDIUM",
    fix: "Enable security logging"
  },
  {
    id: "SOC2-004",
    name: "Access Control",
    description: "Access control must be enabled",
    severity: "HIGH",
    fix: "Enable access control"
  }
];

module.exports = soc2Rules;