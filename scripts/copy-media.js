// scripts/copy-media.js
const fs = require("fs");
const path = require("path");

const srcDir = path.resolve("out/_next/static/media"); // Change to the "out" directory
const destDir = path.resolve("out/_next/static/media"); // Same destination directory in "out"

// Function to copy the media files
function copyMediaFiles() {
  if (!fs.existsSync(srcDir)) {
    console.error("❌ Source directory does not exist:", srcDir);
    process.exit(1);
  }

  fs.mkdirSync(destDir, { recursive: true });

  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);
    fs.copyFileSync(srcFile, destFile);
  }

  console.log(
    `✅ Copied ${files.length} media file(s) to out/_next/static/media`
  );
}

copyMediaFiles();
