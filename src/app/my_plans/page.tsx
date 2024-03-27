import React from 'react';
import ClientPagination from '../../layouts/components/client-pagination';
import Link from "next/link";

type  Plan = {
  id : number;
  name : string;
  full_name : string;

};

  export default async function MyPlansPage(props:any) {
    //const resp = await fetch("http://localhost:3000/api/locations");
    //const data: Plan = await resp.json();
    return (
      <>
        <span className="font-bold text-4xl">Planned Visits</span>
        <div className="flex items-center text-sm font-medium text-muted-foreground">Look for places and things to do.</div>
        <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg">
          You have not yet added things to do or places to go.  Plan your visit by <Link href="/things_to_do">browsing for things to do</Link> in Algarve and adding them to your plans. 

          Use Client Pagination

         Image      Activity                   Place   Date
         sup.jpeg   Standup Paddle boarding    Benegil Monday 23 Feb 2024


        <ClientPagination></ClientPagination>
        </div>
      </>
  );
}

