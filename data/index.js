const fs = require('fs');
const path = require('path');
const dataPath = path.resolve(process.cwd(), '/data');

console.log(dataPath);

fs.readFile('./data/dummy.json', 'utf8', (error, jsonFile) => {
  if (error) {
    console.log(error);
    return;
  }

  const jsonData = JSON.parse(jsonFile);
  console.log(jsonData);
});

// getRooms

// getChat

// getMyImages
