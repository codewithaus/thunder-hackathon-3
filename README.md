# THUNDER HACKATHON 3.0

# System Inspector & File Manager

## Project Overview

This project is a Node.js based command-line application that collects system information and performs CRUD (Create, Read, Update, Delete) operations on files.

The application also maintains activity logs and can export collected system information as a JSON report.

---

## Features

### System Information Collection

The application collects:

- Operating System Type
- Platform
- CPU Architecture
- Hostname
- Home Directory
- Node.js Version

### Environment Variables

The application displays:

- USERNAME
- COMPUTERNAME
- PATH

### File Operations

- Create File
- Read File
- Update File
- Delete File

### Activity Logging

All file operations are stored in:

```text
logs/activity.log
```

### Report Generation

System information can be exported to:

```text
reports/system-report.json
```

---

## Project Structure

```text
THUNDER-HACKATHON/
│
├── logs/
│   └── activity.log
│
├── reports/
│   └── system-report.json
│
├── src/
│   ├── filemanager.js
│   ├── logger.js
│   ├── reportGenerator.js
│   └── systeminfo.js
│
├── index.js
├── package.json
└── README.md
```

---

## Modules Used

### os

Used to collect system information.

### fs

Used for:

- Creating files
- Reading files
- Updating files
- Deleting files
- Writing logs
- Generating reports

### readline

Used to create the interactive command-line menu.

### process

Used to access:

- Node.js version
- Environment variables

---

## Code Flow

```text
Application Starts
        │
        ▼
Display Menu
        │
        ▼
User Selects Option
        │
        ├── Show System Information
        ├── Create File
        ├── Read File
        ├── Update File
        ├── Delete File
        ├── Export Report
        ├── View Activity Logs
        └── Exit
        │
        ▼
Selected Module Executes
        │
        ▼
Result Displayed
        │
        ▼
Return To Menu
        │
        ▼
Exit When User Chooses Exit
```

**Important to note: Please scroll upward after choosing an option from the menu in-oreder to see the result.And please write the content in JavaScript's syntax after creating or updating the file in-order to see meaningfull results.

---

## How It Works

### systemInfo.js

Collects system information and environment variables using Node.js built-in modules.

### fileManager.js

Handles all CRUD operations on files.

### logger.js

Stores file operation history inside:

```text
logs/activity.log
```

### reportGenerator.js

Creates a JSON report containing collected system information.

### index.js

Acts as the main controller of the application.

It:

- Displays the menu
- Accepts user input
- Calls the required module
- Shows results
- Returns to the menu until Exit is selected

---

## Error Handling

The application handles common errors such as:

```text
File does not exist
Invalid menu option
```

This prevents the application from crashing unexpectedly.

---

## And About Innovation

Apart from the required system information collection and CRUD operations, the project also includes:

- Activity logging
- Log viewer
- JSON report export
- Menu-driven CLI
- Error handling
- Modular architecture

## Conclusion

This project demonstrates the use of Node.js built-in modules to gather system information, manage files, generate reports, and maintain activity logs through a menu-driven command-line interface(CLI).