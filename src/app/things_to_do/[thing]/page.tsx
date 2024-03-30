import React from 'react';
import Link from "next/link";
import ClientPagination from '../../../layouts/components/client-pagination';

type Place  = {
  uid: string;
  name: string;
  description: string;
  photoName: string;
  tags: string[];
  activity: string[];
};

type Activity  = {
  type: string;
  places: Place[];
};

type Area  = {
  area: string;
  description: string;
  activities: Activity[];
};

type PageData = {
  district: string;
  council: string;
  areas: Area[];
};


export default async function Page(props:any) {
  
  const res = await fetch ('http:localhost:3000/api/places');
  const data = await res.json()
  console.debug("data in my test page")
  console.debug(data)
  
  return (
    <>
    <span className="font-bold text-4xl">Planned Visits</span>
    <div className="flex items-center text-sm font-medium text-muted-foreground">Look for places and things to do.</div>
    <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg">
    <Link href="/myplans">Look for things to do</Link>in Algarve.  
    Add them to your planned visit list. <Link href="/myplans">planned visit list</Link>  
    Enjoy your experiences!
    
    <ClientPagination></ClientPagination>
    </div>
        
      {data.areas.map((area: any) => (
          <div key = {area.area}>{area.description}</div>
          )
        )
      }

      <div>
      {data.areas.map((area: any) =>(
        
          area.activities.map((activity: any) => (
            
            
            activity.places.map((place: any) => (
              <>
              <div>{activity.type}</div>                
              <div>{area.area}</div>
              <div>{data.district}</div>
              <div>{data.council}</div>
              <div>{place.uid}</div>  
              <div>{place.name}</div>  
              <div>{place.description}</div>  
              <div>{place.photoName}</div>  
              <div>{place.tags}</div>  
              <div>{place.activity}</div> 
              </>
              )
              )
            )
            )
            )
          )
        }
      </div>

      
      </>   
  );

}