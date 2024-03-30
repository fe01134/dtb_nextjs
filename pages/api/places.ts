// pages/api/places.ts
import { promises as fs } from 'fs';

export default async function (req, res) {
  // Replace this with your actual data retrieval logic
  console.debug("API responding with values from File system")
  const data = await fs.readFile(process.cwd() + '/pages/api/data/carvoeiro.json', 'utf8');
  
  // Parse JSON data
  console.debug("API responding with values from File system- Raw data")
   //console.debug(data); 
  
  const jsonData = JSON.parse(data);
  console.debug("API responding with values from File system- jsonData")
   //console.debug(jsonData); 
  
  console.debug(JSON.stringify(jsonData)); 
  console.debug("API responding with values from File system- stringify")
  //console.debug(JSON.stringify(jsonData)); 

  res.status(200).json(jsonData);
};
  