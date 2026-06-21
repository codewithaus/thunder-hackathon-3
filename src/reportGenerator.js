const fs = require("fs");

function generateReport(data) {
    const fileName = `./reports/system-report.json`;

    fs.writeFileSync(
        fileName,
        JSON.stringify(data, null, 2)
    );

    console.log("Report generated successfully.");
}

module.exports = generateReport;