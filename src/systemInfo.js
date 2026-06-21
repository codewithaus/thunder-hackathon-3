const os = require("os");

function getSystemInfo() {
    return {
        osType: os.type(),
        platform: os.platform(),
        architecture: os.arch(),
        hostname: os.hostname(),
        homeDirectory: os.homedir(),
        nodeVersion: process.version,

        environmentVariables: {
            PATH: process.env.PATH || "Not Available",
            USERNAME: process.env.USERNAME || "Not Available",
            COMPUTERNAME: process.env.COMPUTERNAME || "Not Available"
        }
    };
}

module.exports = getSystemInfo;