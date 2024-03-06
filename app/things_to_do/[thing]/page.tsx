import React from 'react';

type  Thing = {
  id : number;
  name : string;
  full_name : string;

};

  export default async function ThingPage(props:any) {
    const resp = await fetch("http://localhost:3000/api/things");
    const data: Thing = await resp.json();
    return (
      <>
        <span className="font-bold text-4xl">Place</span>
        Thing Page Data
        {JSON.stringify(data)}
        <div className="flex items-center text-sm font-medium text-muted-foreground">sub heading</div>
        <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg">body</div>
      </>
  );
}


