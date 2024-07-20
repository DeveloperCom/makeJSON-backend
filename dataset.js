// //Modify data from .csv
// import { createReadStream, writeFileSync } from "fs";
// import csv from "csv-parser";




/////////////To remove some data
// const inputFilePath = "./data/male_first_name.csv";
// const outputFilePath = "./data/male_first_name.csv";
// const rows = [];
// createReadStream(inputFilePath)
//   .pipe(csv())
//   .on("data", (row) => {
//     let newRow="";
//     for(let i=0;i<row.name.length;i++){
//         let x=row.name
//         if(x[i]===" "){
//             break
//         }
//         newRow=newRow+x[i]
//     }
//     row.name=newRow

//     rows.push(row);
//   })
//   .on("end", () => {
//     const outputData = rows.map((row) => Object.values(row).join(",")).join("\n");
//     writeFileSync(outputFilePath, outputData);

//     console.log("CSV file updated successfully!");
//   });




// const inputFilePath = "./data/worldcities.csv";
// const outputFilePath = "./data/cityandcontry.csv";
// const rows = [];

// const columnsToRemove = ["city_ascii","lat","lng","iso2","iso3","admin_name","capital","population","id"]; // Specify the column(s) to remove


// createReadStream(inputFilePath)
//   .pipe(csv())
//   .on('data', (row) => {
//     // Remove the specified column(s)
//     columnsToRemove.forEach((col) => delete row[col]);
//     rows.push(row);
//   })
//   .on('end', () => {
//     // Write the updated data to a new CSV file
//     const outputData = rows.map((row) => Object.values(row).join(',')).join('\n');
//     writeFileSync(outputFilePath, outputData);

//     console.log('CSV file successfully processed.');
//   });



let arrayz=[
    [{name:"Ayan"},{city:"kolkata"}],
    [{name:"Pralay"},{city:"Ranaghat"}],
    [{name:"Lae"},{city:"Noida"}]
]
for(let i in arrayz){
  let subArr=arrayz[i]
  for(let j in subArr){
    arrayz[j]
  }
}