// pages/cars.tsx
//
//  Works http://localhost:3000/cars
//
import { useEffect, useState } from 'react';
import CarButton from '../components/CarButton';
import Car from '../model/car';

const CarsPage: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    // Function to fetch cars from the API
    const fetchCars = async () => {
      try {
        const response = await fetch('/api/cars'); // Assuming your API endpoint is '/api/cars'
        const data = await response.json();

        console.debug(data)

        // Map received data to Product objects using the createProduct method
        const carObjects = data.cars.map((carData) =>
        Car.createCar(carData.id, carData.name)
        );

        setCars(carObjects);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };


    fetchCars();
  }, []); // Empty dependency array ensures the useEffect runs only once on component mount

  return (
    <div>
      <h1>Car List</h1>
      <div>
        {cars.slice(0, 3).map((car) => (
          <CarButton key={car.getId()} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarsPage;

