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

export const fetchFlashcardsDelete = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/flashcards/${id}`, { method: 'DELETE' })

        if (response.ok) {
            console.log('Flashcard deleted successfully');
        } else {
            console.error('Failed to delete flashcard');
        }
    } catch (error) {
        console.error('Error deleting flashcard:', error);
    }
}

// export const fetchFlashcardsAdd = async (id) => {
//
// }












