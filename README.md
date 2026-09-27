# Aegis-Dev
# 🛡️ CyberShield: Next-Gen AI SecOps & Compliance Platform

CyberShield is an enterprise-grade security and SecOps suite designed to protect modern AI-driven applications and traditional codebases. Built collaboratively during a hackathon, CyberShield provides a modular architecture that combines real-time prompt injection prevention, static code secret detection, automated compliance auditing, and self-healing automated remediation.

---

## 🏗️ Architecture & Team Modules

CyberShield is engineered as a decoupled, micro-module system where each teammate owns a critical security pipeline component, outputting standardized JSON intelligence reports for unified aggregation.

* **Member 1: Code & Secret Scanner (`code_scanner.js`)**
  * **Function:** Scans local codebases and repositories for exposed credentials, hardcoded API keys (e.g., AWS tokens), and plaintext passwords.
  * **Output:** Generates a structured vulnerability assessment (`scan_report.json`).

* **Member 2: AI Firewall & Prompt Shield (`ai_firewall.js`)**
  * **Function:** Operates as an Express-based middleware server running on port `3000`. Intercepts and analyzes LLM prompts in real-time to block sophisticated prompt injections, jailbreaks, and system role overrides.
  * **Output:** Real-time HTTP responses blocking malicious inputs (`403 Forbidden`) and approving safe traffic (`200 OK`).

* **Member 3: Compliance Checker (`compliance_checker.js`)**
  * **Function:** Evaluates system infrastructure and scan logs against major industry compliance frameworks like **SOC2** and **GDPR**.
  * **Output:** Generates comprehensive audit scores and actionable remediation steps (`compliance_report.json`).

* **Member 4: Auto-Fixer & Remediation Engine**
  * **Function:** Ingests output reports from the vulnerability and compliance modules to automatically patch flawed source code.

* **Member 5: Natural Language Copilot & Threat Map (`copilot_chat.js`)**
  * **Function:** Provides an interactive interface for security engineers to query system threat status and view aggregated threat maps.
  * **Output:** Generates aggregated threat telemetry (`threat_map_report.json`).

---

## ⚙️ Tech Stack

* **Runtime:** Node.js (JavaScript / CommonJS)
* **Framework:** Express.js (for the AI Firewall API Gateway)
* **File System Automation:** Node.js native `fs` module for JSON-based inter-module communication

---

## 🚀 Getting Started & Installation

### Prerequisites
Make sure you have **Node.js** installed on your machine (`node -v`).

### 1. Clone the Repository
```bash
git clone [https://github.com/your-username/cybershield.git](https://github.com/your-username/cybershield.git)
cd cybershield
