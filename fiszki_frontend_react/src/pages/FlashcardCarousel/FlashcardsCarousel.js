import { useState, useEffect } from "react";
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FlashcardsCarousel.css'
import {fetchFlashcardsData} from "../../ApiCalls";


const FlashcardsCarousel = () => {

  const [data, setData] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flashcard, setFlashcard] = useState({});

  const displayFlashcard = (frontsideData, backsideData) => {
    setFlashcard(() => {
      return {
        frontside: frontsideData,
        backside: backsideData
      }
    });
  }

  useEffect(() => {
    fetchFlashcardsData().then(value => {
      setData(value);
      setFlashcard(value[0]);
    })
  }, []);

  const handleNextButton = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
      displayFlashcard(data[currentIndex + 1].frontside, data[currentIndex + 1].backside);
    }
    else {console.log('ni ma wincyj')
  }
  };

  const handlePreviousButton = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      displayFlashcard(data[currentIndex - 1].frontside, data[currentIndex - 1].backside);
    } else {
      console.log('ni ma mniej')
    }
  };

  return (
        <div className="container-fluid site">
          <Card>
            <div className="d-flex justify-content-center flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  {flashcard.frontside}
                </div>
                <div className="flip-card-back">
                  {flashcard.backside}
                </div>
              </div>
            </div>

            <div className="d-flex button-group">
              <Button className="button col text-center " onClick={handlePreviousButton}>Previous</Button>
              <div className='col text-center mt-1'>{currentIndex + 1}/ {data.length}</div>
              <Button className="button col text-center " onClick={handleNextButton}>Next</Button>
            </div>
          </Card>
        </div>

  );
}
export default FlashcardsCarousel;
