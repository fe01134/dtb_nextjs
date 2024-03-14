// pages/api/tests.ts
import { promises as fs } from 'fs';

//import thingsJson from '../../api/data/things.json'; // This import style requires "esModuleInterop", see "side notes"
//console.log("API Tests");
//console.log(thingsJson);

export default async function (req, res) {
  // Replace this with your actual data retrieval logic
  console.debug("API responding with test values")
  const data = await fs.readFile(process.cwd() + '/pages/api/data/things.json', 'utf8');
  
  // Parse JSON data
  console.debug("API responding with test values from things.json")
  console.debug(data); 
  
  const jsonData = JSON.parse(data);
  console.debug("API responding with test values from File system- jsonData")
  //console.debug(jsonData); 
  
  //console.debug(JSON.stringify(jsonData)); 
  //console.debug("API responding with myevents values from File system- stringify")
  //console.debug(JSON.stringify(jsonData)); 

  res.status(200).json(jsonData);
};

/*
export default function (req, res) {
  // Replace this with your actual data retrieval logic
  console.debug("API responding with values")
  const places = [
    { id: 1, name: 'Place 1', full_name: 'Praia Vale Milho ' },
    { id: 2, name: 'Place 2', full_name: 'Praia Centeanes' },
    { id: 3, name: 'Place 3', full_name: 'Intermarche' },
    { id: 4, name: 'Place 4', full_name: 'Appolonia' },
    { id: 5, name: 'Place 5', full_name: 'Pub' },
    { id: 6, name: 'Place 6', full_name: 'Restaurant' },
    // ... other cars
  ];

  res.status(200).json({ places });
};
*/
