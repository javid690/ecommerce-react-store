import React, { useState, useEffect } from 'react';
import './Review.css'; 
import avator1 from '../../assets/images/avator.jpg'
import avator2 from '../../assets/images/avator2.jpg'

const initialReviews = [
  {
    id: 1,
    name: 'Janice Miller',
    date: 'April 06, 2023',
    avatar: avator1,
    rating: 5,
    text: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est...'
  },
  {
    id: 2,
    name: 'Benjam Porter',
    date: 'April 12, 2023',
    avatar: avator2,
    rating: 5,
    text: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est...'
  }
];

const Review = () => {
  // Load from localStorage if available
  const storedReviews = JSON.parse(localStorage.getItem('reviews'));
  const [reviews, setReviews] = useState(storedReviews || initialReviews);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    text: ''
  });

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: reviews.length + 1,
      name: formData.name,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      avatar: `https://i.pravatar.cc/40?img=${reviews.length + 3}`,
      rating: Number(formData.rating),
      text: formData.text
    };
    setReviews(prev => [...prev, newReview]);
    setFormData({ name: '', email: '', rating: 0, text: '' });
  };

  return (
    <div className="review-container">
      <div className="review-tabs">
        <h4>Reviews ({reviews.length})</h4>
      </div>

      <div className="review-list">
        {reviews.map(r => (
          <div key={r.id} className="review-item">
            <img src={r.avatar} alt={r.name} className="review-avatar" />
            <div className="review-content">
              <div className="review-header">
                <strong>{r.name}</strong>
                <span className="review-date">{r.date}</span>
                <div className="review-stars">
                  {'★'.repeat(r.rating) + '☆'.repeat(5 - r.rating)}
                </div>
              </div>
              <p>{r.text}</p>
              <hr />
            </div>
          </div>
        ))}
      </div>

      <div className="review-form">
        <h5>Be the first to review “Lightweight Puffer Jacket With a Hood”</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your rating *</label>
            <select name="rating" value={formData.rating} onChange={handleChange} required>
              <option value={0}>Select rating</option>
              <option value={1}>★☆☆☆☆</option>
              <option value={2}>★★☆☆☆</option>
              <option value={3}>★★★☆☆</option>
              <option value={4}>★★★★☆</option>
              <option value={5}>★★★★★</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              name="text"
              placeholder="Your Review"
              value={formData.text}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email address *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>
             Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>
          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Review;
