import React from 'react';

type  Place = {
  id : number;
  name : string;
  full_name : string;

};

  export default async function PlacesPage(props:any) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const resp = await fetch(`${apiUrl}/locations`);
    const data: Place = await resp.json();
    
    
    
    return (
      <>
        <span className="font-bold text-4xl">Place</span>
        Place Page Data
        {JSON.stringify(data)}
        <div className="flex items-center text-sm font-medium text-muted-foreground">sub heading</div>
        <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg">body</div>
      </>
  );
}


