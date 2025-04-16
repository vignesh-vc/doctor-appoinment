import { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorAvailability = () => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/slots')
      .then(res => setSlots(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Doctor Availability</h2>
      <ul>
        {slots.map(slot => (
          <li key={slot._id} className="py-2 border-b">
            {slot.date} | {slot.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorAvailability;
