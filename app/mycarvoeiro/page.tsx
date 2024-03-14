// Test using url http://localhost:3000/mytest 
// Go to root/test   to see hello world page
// in this case our page is asynchronous and loads data from server to see 70107786


type  Repository = {
  id : number;
  name : string;
  full_name : string;

};

import Link from "next/link";
export default async function Page() {
  
  const res = await fetch ('http:localhost:3000/api/tests');

  console.debug("res.body")
  console.debug(res)

  const data = await res.json()
  console.debug("data in my test page")
  console.debug(data)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      Hello World Test Page<br/>
       
      {data.map((thing) => (
        <div key = {thing.id}>{thing.full_name}</div>
      )
      )
      }
       
       <br/>

      <Link href="/blog/21">About Blog post 12</Link>
      </div>
    </main>
  );
}
