import React from 'react';
import ClientPagination from '@/components/client-pagination';
import Place from '../../model/place';
import PlaceTile from '../../components/PlaceTile';

  export default async function PlacesPage(props:any) {
    const resp = await fetch("http://localhost:3000/api/places");
    const data = await resp.json();
    console.debug("Place page returned new carvoeiro data");
    //console.debug(data);
    // {JSON.stringify(data)}
    const placeObjects = data.areas.map((area) =>
    area.activities.map((activity) =>
      activity.places.map((place) =>
        Place.createPlace(
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
        )
      )
    )
  );

  // Iterating through the array of areas
  data.areas.forEach((area) => {
    console.log(` Iterate Area: ${area.area}`);
  
    // Iterating through the array of activities within each area
    area.activities.forEach((activity) => {
      console.log(`  Activity Type: ${activity.type}`);
    
      // Iterating through the array of places within each activity
      activity.places.forEach((place) => {
        console.log(`    Place Name: ${place.name}`);
        // Add more logic here based on your needs
 

      });
    });
});
  
    return (
      <>
        <span className="font-bold text-4xl">Places</span>
        Places Page Data works
       
        <div>
        <h1>Places List</h1>
          <div>
            {placeObjects[0][0].map((myplace) => (
                  <PlaceTile key={myplace.getUid()} value={myplace}></PlaceTile>
               ))}
          </div>
        </div>

        <div>
 
        </div>
        <div className="flex items-center text-sm font-medium text-muted-foreground">sub heading</div>
        <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg">
        <ClientPagination></ClientPagination>
        </div>
      </>
  );
}
