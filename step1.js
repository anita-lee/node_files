const fsP = require("fs/promises");
const path = process.argv[2];

async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf8");
    console.log(contents);
  } catch (err) {
    console.error(`Error reading ${path}:`, err);
    process.exit(1);
  }
}

cat(path);