const fs = require("fs");
const { logActivity } = require("./logger");

function createFile(fileName, content = "") {
    fs.writeFileSync(fileName, content);

    logActivity(`Created file: ${fileName}`);

    console.log(`File "${fileName}" created successfully.`);
}

function readFile(fileName) {
    try {
        const data = fs.readFileSync(fileName, "utf-8");

        logActivity(`Read file: ${fileName}`);

        console.log(data);
    } catch {
        console.log(`Error: File "${fileName}" does not exist.`);
    }
}

function updateFile(fileName, content) {
    try {
        fs.writeFileSync(fileName, content);

        logActivity(`Updated file: ${fileName}`);

        console.log(`File "${fileName}" updated successfully.`);
    } catch {
        console.log(`Error updating "${fileName}".`);
    }
}

function deleteFile(fileName) {
    try {
        fs.unlinkSync(fileName);

        logActivity(`Deleted file: ${fileName}`);

        console.log(`File "${fileName}" deleted successfully.`);
    } catch {
        console.log(`Error: File "${fileName}" does not exist.`);
    }
}

module.exports = {
    createFile,
    readFile,
    updateFile,
    deleteFile
};