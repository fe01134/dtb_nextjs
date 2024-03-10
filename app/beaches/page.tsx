// beaches/page.tsx
"use client";
import React from 'react';
import ClientPagination from '@/components/client-pagination';
import Area from '../../model/activity';
import Activity from '../../model/activity';
import Place from '../../model/activity';


function displayValue(value: string | number | boolean | object){
  if (typeof value === "string") {
console.log(`The value is a string: &quot;${value}&quot;`);
} else if (typeof value === "number") {
console.log(`The value is a number: ${value}`);
} else if (typeof value === "boolean") {
console.log(`The value is a boolean: ${value}`);
} else if (typeof value === "object") {
console.log(`The value is a object: ${value}`);
} else {
console.log(`The value is of unsupported type: ${typeof value}`);
}
}

//import Data from '../../pages/api/data/carvoeiro.json'
  export default async function BeachesPage(props:any) {
    const resp = await fetch("http://localhost:3000/api/beaches");
    const data = await resp.json();
    console.debug("carvoeirodata.json");
    console.debug(data.areas);

    console.debug("TypeData")
    console.debug(displayValue(data.areas))

    // Map received data to Product objects using the createProduct method
    //const activities = data.areas[0].activities;
    // Create Place objects
    const myplaceObjects = data.areas.map((myplaceData) =>
      Place.createPlace(myplaceData.area)
    );

    //const myactivityObjects = AreaModel.createArea(data.areas);

    return (
      <>
        <span className="font-bold text-4xl">Beaches</span>
        <h1>Beach Activities City</h1>
     
      <div>
        {myplaceObjects.map((place)=> ( 
          place.getName())
        )}
      </div>

  
        <div className="flex items-center text-sm font-medium text-muted-foreground">sub heading</div>
        <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg">
        <ClientPagination></ClientPagination>
        </div>
      </>
    );
};