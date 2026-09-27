// Member 2: AI Firewall & Prompt Shield
const express = require('express');
const app = express();
app.use(express.json());

// Firewall Middleware Function
const llmFirewall = (req, res, next) => {
    const userPrompt = req.body.prompt || "";
    console.log(`[AI Firewall] Inspecting incoming prompt: "${userPrompt}"`);

    const dangerousKeywords = ["ignore previous instructions", "system role is now", "pretend you are a hacker", "drop table"];
    
    let isMalicious = false;
    for (let word of dangerousKeywords) {
        if (userPrompt.toLowerCase().includes(word)) {
            isMalicious = true;
            break;
        }
    }

    if (isMalicious) {
        console.log(`[AI Firewall] 🚨 BLOCKED: Prompt injection detected!`);
        return res.status(403).json({
            safe: false,
            error: "Prompt Injection Blocked by CyberShield AI Firewall"
        });
    }

    console.log(`[AI Firewall] ✅ SAFE: Prompt passed security inspection.`);
    next();
};

app.post('/api/ai-chat', llmFirewall, (req, res) => {
    res.json({
        safe: true,
        message: "Request successfully processed by AI model."
    });
});

app.listen(3000, () => {
    console.log(`[AI Firewall] Firewall server running on port 3000`);
});