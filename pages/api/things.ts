// pages/api/things.ts

export default function (req, res) {
  // Replace this with your actual data retrieval logic
  console.debug("API responding with values")
  const things = [
    { id: 1, name: 'Thing 1', full_nmae: 'Thing Marathon' },
    { id: 2, name: 'Thing 2', full_nmae: 'Thing F1' },
    { id: 3, name: 'Thing 3', full_nmae: 'Thing Volta De Portugal' },
    { id: 4, name: 'Thing 4', full_nmae: 'Thing Portimao Football' },
    { id: 5, name: 'Thing 5', full_nmae: 'Thing Kayake Racing' },
    { id: 6, name: 'Thing 6', full_nmae: 'Thing MotoGP' },
    // ... other cars
  ];

  res.status(200).json({ things });
};
  