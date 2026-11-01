const fs = require("fs");
require("dotenv").config();

const fileName = process.env.FILENAME || "file.txt";
const textToWrite = "Hello! This is the text we wrote into the file using Node.js.";

fs.writeFile(fileName, textToWrite, "utf-8", (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log(`File "${fileName}" successfully created and written!`);

    fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        
        console.log("File content:");
        console.log(data);
    });
});