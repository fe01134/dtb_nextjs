import React from 'react';
import ClientPagination from '@/components/client-pagination';
import Place from '../../model/place';

  export default async function PlacesPage(props:any) {
    const resp = await fetch("http://localhost:3000/api/places");
    const data = await resp.json();
    console.debug("Place page returned data")
    console.debug(data)

    // Map received data to Place objects using the createPlace method in /model/place.ts
    const placesObjects = data.map((placeData) =>
    Place.createPlace(placeData.id, placeData.name, placeData.full_name)
    );

    return (
      <>
        <span className="font-bold text-4xl">Places</span>
        Places Page Data works
        {JSON.stringify(data)}
        <div>
        <h1>Places List</h1>
          <div>
            {placesObjects.map((place) => (
              <div key={place.getId()}> {place.getFullName()}</div>
            ))}
          </div>
        </div>

        <div className="flex items-center text-sm font-medium text-muted-foreground">sub heading</div>
        <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg">
        <ClientPagination></ClientPagination>
        </div>
      </>
  );
}

