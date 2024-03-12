import { promises as fs } from 'fs';
import React from 'react';
import ClientPagination from '@/components/client-pagination';
import Thing from '../../model/thing';

  export default async function ThingsToDoPage(props:any) {
    const resp = await fetch("http://localhost:3000/api/things");
    const data = await resp.json();
    console.debug("Things to do page returned data")
    console.debug(data)


    // Map received data to Product objects using the createProduct method
    const thingsObjects = data.map((thingData) =>
    Thing.createThing(thingData.id, thingData.name, thingData.full_name)
    );


    return (
      <>
        <span className="font-bold text-4xl">Things</span>
        Things to Do Page Data
        {JSON.stringify(data)}
        <div>
        <h1>Things to Do List</h1>
          <div>
            {thingsObjects.map((thing) => (
              <div key={thing.getId()}> {thing.getFullName()}</div>
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