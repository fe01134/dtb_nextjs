// pages/api/places.ts

export default function (req, res) {
  // Replace this with your actual data retrieval logic
  console.debug("API responding with values")
  const places = [
    { id: 1, name: 'Place 1', full_nmae: 'Place Marathon' },
    { id: 2, name: 'Place 2', full_nmae: 'Place F1' },
    { id: 3, name: 'Place 3', full_nmae: 'Place Volta De Portugal' },
    { id: 4, name: 'Place 4', full_nmae: 'Place Portimao Football' },
    { id: 5, name: 'Place 5', full_nmae: 'Place Kayake Racing' },
    { id: 6, name: 'Place 6', full_nmae: 'Place MotoGP' },
    // ... other cars
  ];

  res.status(200).json({ places });
};
  