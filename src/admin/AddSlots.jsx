import { useState } from 'react';
import axios from 'axios';

const AddSlots = () => {
  const [slot, setSlot] = useState({ date: '', time: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/slots', slot)
      .then(() => {
        alert('Slot added!');
        setSlot({ date: '', time: '' });
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add New Slot</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="date" value={slot.date} onChange={e => setSlot({ ...slot, date: e.target.value })} className="border p-2 w-full" required />
        <input type="time" value={slot.time} onChange={e => setSlot({ ...slot, time: e.target.value })} className="border p-2 w-full" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Slot</button>
      </form>
    </div>
  );
};

export default AddSlots;
