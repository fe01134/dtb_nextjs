export default (req, res) => {
//export async function GET (request: Request) {
    // Replace this with your actual data retrieval logic
    console.debug("API for data.ts responding with values")

    const resources = [
                    {
                        id: "1",
                        title: "some funnky stuff",
                        description: "is a great disco music song from th3 70s",
                        link: "https://link.com",
                        image: "https://image.com/",
                        priority: 3,
                        timeToFinish: 120,
                        active: true
                    },

                    {
                        id: "2",
                        title: "Boogy Nights",
                        description: "is the last top 10  great disco music song from th3 70s",
                        link: "https://link.com",
                        image: "https://image.com/",
                        priority: 2,
                        timeToFinish: 120,
                        active: true
                    },
                    {
                        id: "3",
                        title: "downtown girls",
                        description: "was the most played disco music song from th3 70s",
                        link: "https://link.com",
                        image: "https://image.com/",
                        priority: 1,
                        timeToFinish: 120,
                        active: true
                    }
                    ];
  
        res.status(200).json({ resources });
    //return Response.json({resources });
}
