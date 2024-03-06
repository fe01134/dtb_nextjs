import React from 'react';
import ClientPagination from '@/components/client-pagination';
import MyEvent from '../../model/myevent';

  export default async function MyEventsPage(props:any) {
    const resp = await fetch("http://localhost:3000/api/myevents");
    const data = await resp.json();
    console.debug("Events page returned data")
    console.debug(data)

    // Map received data to Product objects using the createProduct method
    const myeventsObjects = data.map((myeventData) =>
    MyEvent.createMyEvent(myeventData.id, myeventData.name, myeventData.full_name)
    );

    return (
      <>
        <span className="font-bold text-4xl">MyEvents</span>
        MyEvents Page Data
        {JSON.stringify(data)}
        <div>
        <h1>MyEvents List</h1>
          <div>
            {myeventsObjects.map((myevent) => (
              <div key={myevent.getId()}> {myevent.getFullName()}</div>
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