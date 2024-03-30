// pages/api/myevents.ts

export default function (req, res) {
  // Replace this with your actual data retrieval logic
  console.debug("API responding with values")
  const myevents = [
    { id: 1, name: 'Event 1', full_name: 'Event Marathon' },
    { id: 2, name: 'Event 2', full_name: 'Event F1' },
    { id: 3, name: 'Event 3', full_name: 'Event Volta De Portugal' },
    { id: 4, name: 'Event 4', full_name: 'Event Portimao Football' },
    { id: 5, name: 'Event 5', full_name: 'Event Kayake Racing' },
    { id: 6, name: 'Event 6', full_name: 'Event MotoGP' },
    // ... other cars
  ];

  res.status(200).json({ myevents });
};
  