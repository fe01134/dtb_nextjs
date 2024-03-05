// pages/api/places.ts

export default function (req, res) {
  // Replace this with your actual data retrieval logic
  console.debug("API responding with values")
  const places = [
    { id: 1, name: 'Place 1', full_nmae: 'Praia Vale Milho ' },
    { id: 2, name: 'Place 2', full_nmae: 'Praia Centeanes' },
    { id: 3, name: 'Place 3', full_nmae: 'Intermarche' },
    { id: 4, name: 'Place 4', full_nmae: 'Appolonia' },
    { id: 5, name: 'Place 5', full_nmae: 'Pub' },
    { id: 6, name: 'Place 6', full_nmae: 'Restaurant' },
    // ... other cars
  ];

  res.status(200).json({ places });
};