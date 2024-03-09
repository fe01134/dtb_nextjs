import React from 'react';
import ClientPagination from '@/components/client-pagination';
import Area from '../../model/activity';
//import Data from '../../pages/api/data/carvoeiro.json'
  export default async function BeachesPage(props:any) {
    const resp = await fetch("http://localhost:3000/api/beaches");
    const data = await resp.json();
    console.debug("carvoeirodata.json");
    console.debug(data);

    // Map received data to Product objects using the createProduct method
    //const activities = data.areas[0].activities;
    const myactivityObjects = data.areas.map((myactivityData) =>
    Area.createArea(myactivityData)
    );

    return (
      <>
        <span className="font-bold text-4xl">Beaches</span>
        Beaches Page Data
        {JSON.stringify(data)}
        
        <h1>Beach Activities City</h1>
      <div>

        <ul>    
          {myactivityObjects.map((area: any, index: number) => (
            <li key={index}>
              <strong>Area:</strong> {area.name}
            </li>
          ))}
        </ul>
      </div>

        <div className="flex items-center text-sm font-medium text-muted-foreground">sub heading</div>
        <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg">
        <ClientPagination></ClientPagination>
        </div>
      </>
    );
};