import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import {fetchFlashcardsData, fetchFlashcardsDelete} from "../../ApiCalls";
import './ManageFlashcards.css'
import editIcon from './editIcon.webp'
import binIcon from './binIcon.webp'

const ManageFlashcards = () => {
    const [data, setData] = useState([]);
    const [frontside, setFrontside] = useState('');
    const [backside, setBackside] = useState('');

    useEffect(() => {
        fetchFlashcardsData().then(value => {
            setData(value);
        });
    }, []);

    const handleFrontsideChange = (event) => {
        setFrontside(event.target.value);
    };

    const handleBacksideChange = (event) => {
        setBackside(event.target.value);
    };

    const handleAddFlashcard = () => {
        const newFlashcard = {
            frontside,
            backside
        };

        fetch('http://localhost:8080/flashcards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFlashcard)
        })
            .then(response => response.json())
            .then(value => {
                setData([...data, value])
                console.log('Flashcard added:', data);
                setFrontside('');
                setBackside('');
            })
            .catch(error => {
                console.error('Error adding flashcard:', error);
            });

    };

    const handleDeleteFlashcard = (id) => {
        fetchFlashcardsDelete(id).then(()=>
            fetchFlashcardsData().then(value => {
            setData(value);
        }));

    };


    return (
        <div className='table-wrapper'>
            <table className="container-fluid site table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Frontside</th>
                    <th>Backside</th>
                    <th>Manage</th>
                </tr>
                </thead>

                <tbody>
                {data && data.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.frontside}</td>
                        <td>{item.backside}</td>
                        <td className='d-flex align-items-center'>
                            <Button variant="outline-*" className="mx-auto blue-hover link">
                                <img className='editIcon' src={editIcon} alt="Edit Icon" />
                            </Button>
                            <Button variant="outline-*"  className="mx-auto yellow-hover link" onClick={() => handleDeleteFlashcard(item.flashcardId)}>
                                <img className='binIcon' src={binIcon} alt="Bin Icon" />
                            </Button>
                        </td>
                    </tr>
                ))}
                <tr>
                    <td>{data.length + 1}</td>
                    <td>
                        <Form.Control type="text" value={frontside} onChange={handleFrontsideChange} placeholder="Frontside" />
                    </td>
                    <td>
                        <Form.Control type="text" value={backside} onChange={handleBacksideChange} placeholder="Backside" />
                    </td>
                    <td>
                        <Button className='add-button' onClick={handleAddFlashcard}>Add Flashcard</Button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ManageFlashcards;
