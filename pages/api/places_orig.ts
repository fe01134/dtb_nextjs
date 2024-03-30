// pages/api/places.ts
import { promises as fs } from 'fs';

// Define types for your JSON structure
type Place = {
  [area: string]: {
    [district: string]: {
      [activity: string]: {
        Place: string;
        Tags: string[];
      }[];
    };
  };
};

export default async function (req, res) {
    // Replace this with your actual data retrieval logic
    console.debug("API reading places")
    const data = await fs.readFile(process.cwd() + '/app/pages/api/data/places.json', 'utf8');
    
    // Parse JSON data
    const jsonData = JSON.parse(data);
    console.debug(JSON.stringify(jsonData));


    const selectedDistrict = "Albufeira";
    const selectedActivity = "Super Markets";

/*
    const filteredPlaces = data.filter(w => {
      const catFilter = selectedDistrict ? data.District === selectedDistrict : true; // true if no District selected
      const yearFilter = selectedActivity ? data.Activity === selectedActivity : true; // true if no Activity selected
      return catFilter && yearFilter;

    })
    */

    res.status(200).json( {Hello: "World"} );
  };
  