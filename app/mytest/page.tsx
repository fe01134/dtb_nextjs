// Works test using url http://localhost:3000/mytest 
// uses API http:localhost:3000/api/places
// Go to root/test   to see hello world page
// in this case our page is asynchronous and loads data from server to see 70107786

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

import Link from "next/link";
export default async function Page() {
  
  const res = await fetch ('http:localhost:3000/api/places');

  console.debug("res.body")
  console.debug(res)

  const data = await res.json()
  console.debug("data in my test page")
  console.debug(data)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      Hello World Test Page<br/>
       
      
      {data.areas.map((area) => (
        <div key = {area.area}>{area.description}</div>
      )
      )
      }
       
       <br/>

      <Link href="/blog/21">About Blog post 12</Link>
      </div>
    </main>
  );
}
