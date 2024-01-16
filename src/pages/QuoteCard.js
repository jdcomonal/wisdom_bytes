// Assuming your QuoteCard component looks something like this
const QuoteCard = ({ quote }) => {
    return (
      <div className="p-4 rounded-md shadow-md bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <p className="text-lg font-semibold">{quote.content}</p>
        <p className="text-sm mt-2">- {quote.author}</p>
      </div>
    );
  };
  
  export default QuoteCard;
  