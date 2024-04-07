import React from 'react';
import { useEffect, useState } from 'react';
//import ClientPagination from '@/components/client-pagination';
import Place from '../model/place';
//import PlaceTile from '../components/PlaceTile';

const PlacesPage: React.FC = () => {
  const [places, setPlaces] = useState<Place[]>([]);


  useEffect(() => {
    // Function to fetch cars from the API
    const fetchPlaces = async () => {
      try {
        const response = await fetch('/api/places'); // Assuming your API endpoint is '/api/cars'
        const data = await response.json();

        //console.debug(data)

      // Iterating through the array of areas
      data.areas.forEach((area) => {
        console.log(`Area: ${area.area}`);
      
        // Iterating through the array of activities within each area
        area.activities.forEach((activity) => {
          console.log(`  Activity Type: ${activity.type}`);
        
          // Iterating through the array of places within each activity
          activity.places.forEach((place) => {
            console.log(`    Place Name: ${place.name}`);
            // Add more logic here based on your needs
            
            const newPlace = Place.createPlace(
              activity.type,
              place.uid,
              place.name,
              data.district,
              data.council,
              area.area,
              place.description,
              place.photoName,
              place.tags,
              place.activity
            );
            
            //places.push(newPlace);

          });
        });
      });
  

        setPlaces(places);
        //console.debug("checking place names");

        places.map((checkplace) => {
          console.debug(checkplace.getName());
        }
        )

      } catch (error) {
        console.error('Error fetching places:', error);
      }
    };

    fetchPlaces();

  }, []); // Empty dependency array ensures the useEffect runs only once on component mount

  return (
    <div>
      <h1>places List</h1>
      <div>
        {places.map((testplace) => (
          <div key={testplace.getUid()} >{testplace.getName()}</div>
        ))}
      </div>
    </div>
  );
};

export default PlacesPage;

