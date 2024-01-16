import React, { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('motivational');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Reset quotes when the category changes
    setQuotes([]);
    fetchQuotes();
  }, [selectedCategory]);
  
  const fetchQuotes = async () => {
    try {
      setIsLoading(true);
  
      const response = await fetch(`https://api.quotable.io/random?tags=${selectedCategory}&count=3`);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      // Convert data to an array if it's an object
      const newQuotes = Array.isArray(data) ? data : [data];
  
      setQuotes((prevQuotes) => prevQuotes.concat(newQuotes));
    } catch (error) {
      console.error('Error fetching quotes:', error);
    } finally {
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    fetchQuotes();
  }, [selectedCategory]);

  const loadMoreQuotes = () => {
    // Trigger fetching 5 more quotes
    fetchQuotes();
  };

  const categories = [
    'motivational',
    'inspirational',
    'life',
    'success',
    'love',
    'wisdom',
    'happiness',
    'friendship',
    'future',
    'courage',
    // Add more categories as needed
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Wisdom Bytes Quotes</h2>

      <div className="flex flex-wrap justify-center space-x-4 mb-4 mt-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-white rounded-md ${
              selectedCategory === category ? 'bg-blue-500' : 'bg-gray-500'
            } mb-2 md:mb-0 md:mr-2`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quotes.map((quote, index) => (
          <QuoteCard key={index} quote={quote} />
        ))}
      </div>

      {isLoading && <p className="text-center mt-4">Loading...</p>}

      {!isLoading && (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md"
            onClick={loadMoreQuotes}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Quotes;
