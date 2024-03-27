// Works with http://localhost:3000/cars
// components/CarButton.tsx
import { useRouter } from 'next/router';
import Car from '../model/car';

interface CarButtonProps {
  car: Car;
}

const CarButton: React.FC<CarButtonProps> = ({ car }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/car/${car.getId()}`);
    // Replace the above line with the desired route or action when a button is clicked
  };

  return (
    <button onClick={handleClick}>
      {car.getName()} (ID: {car.getId()})
    </button>
  );
};

export default CarButton;
