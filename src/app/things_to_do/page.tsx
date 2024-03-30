import React from 'react';
import Link from "next/link";
import ClientPagination from '../../layouts/components/client-pagination';


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
  console.debug("data from api/places ")
  console.debug(data)
  
  return (
    <div className="container">
    <h1>Things to Do</h1>

    <Link href="/myplans">Plan your visit.  Look for things to do</Link> in Algarve.  
    Add them to your <Link href="/myplans">plans</Link>  

      {data.areas.map((area: any) => (
          <div className="section-sm bg-gradient" key = {area.area}>
          
            <h2>{area.area}</h2>

            {area.description}
            
            {area.activities.map((activity: any) => (          
              <div className="row items-center justify-between" key = {area.area + '-' + activity.type}>Activity: {activity.type}


                <h3>{activity.type}</h3>
                {activity.places.map((place: any) => (


                    <div className="row items-center justify-between" key = {place.uid}>Place: 
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
                    </div>
                  )
                  )};


              </div>
            )
          )};

        </div>
      ))
      };
      
      
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

      <div className="flex items-center text-sm font-medium text-muted-foreground">sub heading</div>
        <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg">
        <ClientPagination></ClientPagination>
        </div>
      </div>   
  );

}