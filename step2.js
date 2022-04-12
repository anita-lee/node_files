const fsP = require("fs/promises");
const axios = require("axios");

const path = process.argv[2];

//if path is txt file, cat(path)
//if path is url, webCat(path)

function fileOrUrl(path) {
  if (path.startsWith("http")) {
    webCat(path);
  }
  else {
    cat(path)
  }
}

async function cat(textFile) {
  try {
    let contents = await fsP.readFile(textFile, "utf8");
    console.log(contents);
  } catch (err) {
    console.error(`Error reading ${path}:`, err);
    process.exit(1);
  }
}

async function webCat(url) {
  try {
    let contents = await axios (url);
    console.log(contents);
  } catch (err) {
    console.error(`Error reading ${url}:`, err);
    process.exit(1);
  }
}

// cat(path);
// webCat(url);
fileOrUrl(path)