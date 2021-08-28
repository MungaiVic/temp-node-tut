const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath); // Will yield test.txt file name
console.log(base);

const absPath = path.resolve(__dirname, "content", "subfolder", "test.txt"); // yields the absolute path of test.txt
console.log(absPath);
