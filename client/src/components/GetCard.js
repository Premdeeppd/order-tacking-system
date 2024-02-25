import React, { useState } from 'react';
import axios from 'axios';
import './CardStatus.css';

function FormComponent() {
  const [inputData, setInputData] = useState('');
  const [displayData, setDisplayData] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Reset error state

    try {
      const response = await axios.post('http://localhost:4000/get_card_status', {
        cardid: inputData
      });

      setDisplayData(response.data.answer);  
    } catch (error) {
      setError("Invalid Card ID. Please try again.");
    }

    setInputData(''); // Clear input field
  };
  const handleChange = (event) => {
    setInputData(event.target.value);
  };

  return (
    <div className="card-status-container">
    <h2>Check Card Status</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputData}
        onChange={handleChange}
        placeholder="Enter Card ID"
      />
      <button type="submit">Check Status</button>
    </form>
    {displayData && <p className='status-message'>{displayData}</p>} 
    {error && <p style={{ color: 'red' }}>{error}</p>} 
  </div>
  );
}

export default FormComponent;
