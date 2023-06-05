export const fetchFlashcardsData = async () => {
    try {
        const response = await fetch('http://localhost:8080/flashcards');
        const data = await response.json();
        return data;
    }
    catch (error){
        console.error('Error occurred while fetching data:', error);
    }
}


