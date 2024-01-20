const csv = require("csv-parser");
const fs = require("fs");

const alumnos = [
    {
      name: "Rodri",
      age: "43",
      job: "dev",
    },
    {
      name: "Laura",
      age: "37",
      job: "libreria",
    },
    {
      name: "Antonio",
      age: "33",
      job: "dev",
    },
  ];

  const convertCSV = (data) => {
    let csv = "";
  
      // vamos a leer las claves del objeto
    let headers = Object.keys(data[0]);
  
    // creamos las cabeceras del csv
    csv += headers.join(";") + "\n";
  
    /// vamos a recorreer la data y escribir la info que nos queda de los alumnos
    data.forEach((row) => {
      headers.forEach((header, index) => {
        if (index > 0) {
          csv += ";";
        }
        csv += row[header];
      });
  
      csv += "\n";
    });
  
    return csv;
  };

  const CSVtoFile = convertCSV(alumnos);

  fs.writeFile("alumns.csv", CSVtoFile, (error) => {
    error ? console.log("existe un error ❌") : console.log("fichero creado 👌");
  });