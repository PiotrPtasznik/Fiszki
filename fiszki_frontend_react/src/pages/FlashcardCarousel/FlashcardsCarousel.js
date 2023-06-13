import { useState, useEffect } from "react";
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FlashcardsCarousel.css';
import { fetchFlashcardsData } from "../../ApiCalls";

const FlashcardsCarousel = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flashcard, setFlashcard] = useState({});
  const [isFlipped, setIsFlipped] = useState(false);

  const displayFlashcard = (frontsideData, backsideData) => {
    setIsFlipped(false);
    setFlashcard({
      frontside: frontsideData,
      backside: backsideData
    });

  };

  useEffect(() => {
    fetchFlashcardsData().then(value => {
      setData(value);
      if (value.length > 0) {
        displayFlashcard(value[0].frontside, value[0].backside);
      } else {
        setFlashcard({
          frontside: "No flashcards available",
          backside: "Empty"
        });
      }
    });
  }, []);

  const handleNextButton = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
      displayFlashcard(data[currentIndex + 1].frontside, data[currentIndex + 1].backside);
    } else {
      console.log('No more flashcards');
    }
  };

  const handlePreviousButton = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      displayFlashcard(data[currentIndex - 1].frontside, data[currentIndex - 1].backside);
    } else {
      console.log('No previous flashcards');
    }
  };

  const handleCardClick = () => {
    setIsFlipped(prevIsFlipped => !prevIsFlipped);

  };

  return (
      <div className="container-fluid site">
        <Card>
          <div className="d-flex justify-content-center flip-card" onClick={handleCardClick}>
            <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
              <div className={`flip-card-front ${isFlipped ? 'hidden' : ''}`}>
                {flashcard.frontside}
              </div>
              {isFlipped && (
                  <div className="flip-card-back">
                    {flashcard.backside}
                  </div>
              )}
            </div>
          </div>

          <div className="d-flex button-group">
            <Button className="button col text-center" onClick={() => {
              setIsFlipped(false);
              handlePreviousButton();
            }}>Previous</Button>
            <div className='col text-center mt-1'>{currentIndex + 1}/{data.length}</div>
            <Button className="button col text-center" onClick={handleNextButton}>Next</Button>
          </div>
        </Card>
      </div>

  );
};

export default FlashcardsCarousel;
