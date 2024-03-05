// pages/api/myevents.ts

export default function (req, res) {
  // Replace this with your actual data retrieval logic
  console.debug("API responding with values")
  const myevents = [
    { id: 1, name: 'Event 1', full_nmae: 'Event Marathon' },
    { id: 2, name: 'Event 2', full_nmae: 'Event F1' },
    { id: 3, name: 'Event 3', full_nmae: 'Event Volta De Portugal' },
    { id: 4, name: 'Event 4', full_nmae: 'Event Portimao Football' },
    { id: 5, name: 'Event 5', full_nmae: 'Event Kayake Racing' },
    { id: 6, name: 'Event 6', full_nmae: 'Event MotoGP' },
    // ... other cars
  ];

  res.status(200).json({ myevents });
};
  