const readline = require("readline");

const getSystemInfo = require("./src/systemInfo");
const generateReport = require("./src/reportGenerator");
const { viewLogs } = require("./src/logger");

const {
    createFile,
    readFile,
    updateFile,
    deleteFile
} = require("./src/fileManager");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\n=================================");
    console.log("     THUNDER HACKATHON 3.0  ");
    console.log("System Inspector & File Manager")
    console.log("=================================");
    console.log("1. Show System Information");
    console.log("2. Create File");
    console.log("3. Read File");
    console.log("4. Update File");
    console.log("5. Delete File");
    console.log("6. Export JSON Report");
    console.log("7. View Activity Logs");
    console.log("8. Exit");

    rl.question("\nChoose an option: ", (choice) => {

        switch (choice) {

            case "1":
                const info = getSystemInfo();

                console.log("\n===== SYSTEM INFORMATION =====\n");

                console.log(`OS Type          : ${info.osType}`);
                console.log(`Platform         : ${info.platform}`);
                console.log(`Architecture     : ${info.architecture}`);
                console.log(`Hostname         : ${info.hostname}`);
                console.log(`Home Directory   : ${info.homeDirectory}`);
                console.log(`Node Version     : ${info.nodeVersion}`);

                console.log("\n===== ENVIRONMENT VARIABLES =====\n");

                console.log(`USERNAME         : ${info.environmentVariables.USERNAME}`);
                console.log(`COMPUTERNAME     : ${info.environmentVariables.COMPUTERNAME}`);
                console.log(`PATH             : ${info.environmentVariables.PATH}`);

                showMenu();
                break;

            case "2":
                rl.question("Enter file name: ", (fileName) => {

                    rl.question("Enter content: ", (content) => {

                        createFile(fileName, content);

                        showMenu();
                    });
                });
                break;

            case "3":
                rl.question("Enter file name: ", (fileName) => {

                    readFile(fileName);

                    showMenu();
                });
                break;

            case "4":
                rl.question("Enter file name: ", (fileName) => {

                    rl.question("Enter new content: ", (content) => {

                        updateFile(fileName, content);

                        showMenu();
                    });
                });
                break;

            case "5":
                rl.question("Enter file name: ", (fileName) => {

                    deleteFile(fileName);

                    showMenu();
                });
                break;

            case "6":
                const report = getSystemInfo();

                generateReport(report);

                showMenu();
                break;

            case "7":
                viewLogs();
                showMenu();
                break;

            case "8":
                console.log("Exiting...");
                rl.close();
                break;

            default:
                console.log("Invalid Menu option!");
                showMenu();
        }
    });
}

showMenu();