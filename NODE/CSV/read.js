const csv = require("csv-parser");
const fs = require("fs");

const datos = [];

fs.createReadStream("csv.csv")
  .pipe(csv({ separator: ";" }))
  .on("data", (data) => datos.push(data))
  .on("end", () => {
    console.log(datos);
  });