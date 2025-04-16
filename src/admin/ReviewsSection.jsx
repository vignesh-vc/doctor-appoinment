import { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/reviews')
      .then(res => setReviews(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Patient Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review._id} className="border-b py-3">
            <p className="text-sm italic">"{review.comment}"</p>
            <p className="text-xs text-gray-500">– {review.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsSection;
