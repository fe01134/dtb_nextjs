import React from 'react';
import ClientPagination from '../../layouts/components/client-pagination';
import Place from '../../../model/place';
import PlaceTile from '../../layouts/components/PlaceTile';

  export default async function PlacesPage(props:any) {

      try{
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const resp = await fetch(`${apiUrl}/places`);
      console.debug("data from api/places ")
      console.debug(apiUrl)
      const data = await resp.json();
      console.debug("Place page returned new carvoeiro data");
      //console.debug(data);
      // {JSON.stringify(data)}

      const placeObjects = data.areas.map((area: any) =>
      area.activities.map((activity: any) =>
        activity.places.map((place: any) =>
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
    data.areas.forEach((area: any) => {
      console.log(` Iterate Area: ${area.area}`);
    
      // Iterating through the array of activities within each area
      area.activities.forEach((activity: any) => {
        console.log(`  Activity Type: ${activity.type}`);
      
        // Iterating through the array of places within each activity
        activity.places.forEach((place : any) => {
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
              {placeObjects[0][0].map((myplace: any) => (
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
      catch (error) {

        return (
          <>
            <span className="font-bold text-4xl">Places</span>
            Places Page Data works
          
            <div>
            <h1>Places List</h1>
              <div>
               None
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

      };
}

