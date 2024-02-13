// pages/api/cars.ts
export default (req, res) => {
    // Replace this with your actual data retrieval logic
    const cars = [
      { id: 1, name: 'Car 1' },
      { id: 2, name: 'Car 2' },
      { id: 3, name: 'Car 3' },
      { id: 4, name: 'Car 4' },
      { id: 5, name: 'Car 5' },
      { id: 6, name: 'Car 6' },
      // ... other cars
    ];
  
    res.status(200).json({ cars });
  };
  