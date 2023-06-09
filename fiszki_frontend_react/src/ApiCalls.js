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

export const fetchFlashcardsAdd = async (newFlashcard) => {
    try {
        const response = await fetch('http://localhost:8080/flashcards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFlashcard)
        });

        if (response.ok) {
            const addedFlashcard = await response.json();
            console.log('Flashcard added:', addedFlashcard);
            return addedFlashcard;
        } else {
            console.error('Failed to add flashcard');
        }
    } catch (error) {
        console.error('Error adding flashcard:', error);
    }
};

//new 8.06
export const fetchFlashcardsUpdate = async (id, updatedFlashcard) => {
    try {
        const response = await fetch(`http://localhost:8080/flashcards/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedFlashcard)
        });

        if (response.ok) {
            console.log('Flashcard updated successfully');
        } else {
            console.error('Failed to update flashcard');
        }
    } catch (error) {
        console.error('Error updating flashcard:', error);
    }
};












