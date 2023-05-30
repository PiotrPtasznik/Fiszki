import { useState, useEffect } from "react";
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FlashcardsCarousel.css'


const FlashcardsCarousel = () => {

  const [data, setData] = useState([])


  const fetchFlashcardsData = async () => {
    try {
      const response = await fetch('http://localhost:8080/flashcards');
      const data = await response.json();
      setData(data);
    }
    catch (error){
      console.error('Error occurred while fetching data:', error);
    }
  }

  const [flashcard, setFlashcard] = useState({
    frontside: "default frontside",
    backside: "default backside"
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const displayFlashcard = (frontsideData, backsideData) => {
    setFlashcard(() => {
      return {
        frontside: frontsideData,
        backside: backsideData
      }
    });
  }

  useEffect(() => {
    fetchFlashcardsData();
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
    <div >

      <div className="container-fluid">
        <Card>
          <Card.Body>
            <div className="row">
              <Card.Title>
                <p>Fiszka :   Index:{currentIndex}</p>
              </Card.Title>
            </div>


            <div className="d-flex justify-content-center mb-4">
              <Card className="d-flex justify-content-center flashcard-display">
                {flashcard.frontside}||{flashcard.backside}
              </Card>
            </div>



            <div className="d-flex">
              <ButtonGroup className="col-sm text-center mt-4">
                <Button className="button" onClick={handlePreviousButton}>Previous</Button>
                <Button className="button" onClick={handleNextButton}>Next</Button>
              </ButtonGroup>
            </div>

          </Card.Body>
        </Card>


      </div>


    </div>
  );

}

export default FlashcardsCarousel;









