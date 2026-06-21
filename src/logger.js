const fs = require("fs");

function logActivity(message) {
    const time = new Date().toLocaleString();

    fs.appendFileSync(
        "./logs/activity.log",
        `[${time}] ${message}\n`
    );
}

function viewLogs() {
    try {
        const logs = fs.readFileSync(
            "./logs/activity.log",
            "utf-8"
        );

        console.log(logs);
    } catch {
        console.log("No logs found.");
    }
}

module.exports = {
    logActivity,
    viewLogs
};