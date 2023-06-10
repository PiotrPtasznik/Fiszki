import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import {fetchFlashcardsData, fetchFlashcardsDelete, fetchFlashcardsAdd, fetchFlashcardsUpdate} from "../../ApiCalls";
import './ManageFlashcards.css'
import editIcon from './editIcon.webp'
import binIcon from './binIcon.webp'
import saveIcon from './saveIcon.webp'

const ManageFlashcards = () => {
    const [data, setData] = useState([]);
    const [frontside, setFrontside] = useState('');
    const [backside, setBackside] = useState('');
    const [editIndex, setEditIndex] = useState(-1);
    const [editMode, setEditMode] = useState(false);


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
        if (!frontside || !backside) {
            alert('Please enter both frontside and backside of the flashcard.');
            return;
        }

        const newFlashcard = {
            frontside,
            backside
        };

        fetchFlashcardsAdd(newFlashcard)
            .then((addedFlashcard) => {
                setData([...data, addedFlashcard]);
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

    const handleEditFrontsideChange = (event, index) => {
        const updatedData = [...data];
        updatedData[index].frontside = event.target.value;
        setData(updatedData);
    };

    const handleEditBacksideChange = (event, index) => {
        const updatedData = [...data];
        updatedData[index].backside = event.target.value;
        setData(updatedData);
    };

    const toggleEditMode = (index) => {
        if (editMode && editIndex === index) {
            // Save the edited flashcard
            setEditIndex(-1);
            setEditMode(false);
            // Send the updated flashcard to the server
            const editedFlashcard = data[index];
            fetchFlashcardsUpdate(editedFlashcard.flashcardId, editedFlashcard)
                .then(() => {
                    console.log('Flashcard updated successfully');
                })
                .catch((error) => {
                    console.error('Error updating flashcard:', error);
                });
        } else {
            setEditIndex(index);
            setEditMode(true);
        }
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
                {data &&
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                {editIndex === index ? (
                                    <Form.Control
                                        type="text"
                                        value={item.frontside}
                                        onChange={(event) => handleEditFrontsideChange(event, index)}
                                    />
                                ) : (
                                    item.frontside
                                )}
                            </td>
                            <td>
                                {editIndex === index ? (
                                    <Form.Control
                                        type="text"
                                        value={item.backside}
                                        onChange={(event) => handleEditBacksideChange(event, index)}
                                    />
                                ) : (
                                    item.backside
                                )}
                            </td>
                            <td className="d-flex align-items-center">
                                <Button
                                    variant="outline-*"
                                    className="mx-auto blue-hover link"
                                    onClick={() => toggleEditMode(index)}
                                >
                                    {editMode && editIndex === index ? (
                                        <img className="editIcon" src={saveIcon} alt="Save Icon" />
                                    ) : (
                                        <img className="editIcon" src={editIcon} alt="Edit Icon" />
                                    )}
                                </Button>
                            <Button variant="outline-*" className="mx-auto red-hover link" onClick={() => handleDeleteFlashcard(item.flashcardId)}>
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
