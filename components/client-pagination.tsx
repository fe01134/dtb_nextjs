"use client";
import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { HeightIcon } from "@radix-ui/react-icons";
import { faker } from "@faker-js/faker";
import { Button } from "./ui/button";
// https://fakerjs.dev/api/image.html#urlpicsumphotos

export default function ClientPagination() {

    const [data,setData] = useState<{ image: string} [] > ([]);
    const generateFakeData = () => {
       const newImage = faker.image.urlPicsumPhotos();
       return { image: newImage };
    };
 
    const resetLocalStorage =() => {
        localStorage.removeItem('fakerData');
        setData([]);
    }

    useEffect(() => {
    const storedData = localStorage.getItem("fakerData");

    if (storedData) {
        setData(JSON.parse(storedData));
    } else {
        const newData = Array.from({length: 30}, generateFakeData)
        setData( newData );
        localStorage.setItem("fakerData", JSON.stringify(newData));
    }
    }, []);

    return (
        <>
            <Button  onClick = {resetLocalStorage} className="my-10">Reset</Button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {data.map((item, idx) => {
                    return( 
                        <Card 
                            key={idx} 
                            className="items-start flex overflow-hidden text-black"
                        >
                        <div className="group flex transform flex-col overflow-hidden transition-all duration-200">
                            <div className="overflow-hidden rounded-sm">
                        
                            <Image 
                                src={item.image} 
                                alt="cat" 
                                width={320} 
                                height={240} 
                                className="h-full w-full transform object-cover transition-all duration-200 group-hover:scale-105">
                            </Image>
                            </div>
                        </div>
                        </Card>
                    );
                })}          
            </div>
        </>
    );
}