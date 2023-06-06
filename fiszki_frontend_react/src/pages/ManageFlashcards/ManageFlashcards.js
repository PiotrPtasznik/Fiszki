import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {fetchFlashcardsData} from "../../ApiCalls";
import './ManageFlashcards.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import editIcon from './editIcon.webp'
import binIcon from './binIcon.webp'

const ManageFlashcards = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchFlashcardsData().then(value => {
            setData(value);
        })
    }, []);

    return (
        <div className='table-wrapper'>
            <table responsive striped bordered hover className="container-fluid site rounded-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Frontside</th>
                    <th>Backside</th>
                    <th></th>

                </tr>
                </thead>

                <tbody>
                {data && data.map((item, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.frontside}</td>
                        <td>{item.backside}</td>
                        <td className='d-flex justify-content-center align-items-center'>
                            <button className="btn btn-primary mx-auto rounded-circle">
                                <img className='editIcon' src={editIcon} alt="Edit Icon"/>
                            </button>
                            <button className="btn btn-danger mx-auto rounded-circle">
                                <img className='binIcon' src={binIcon} alt="Bin Icon"/>
                            </button>
                        </td>
                    </tr>
                ))}
                <tr>
                    <td><Button className='add-button'>Add Flashcard</Button></td>
                    <td>...</td>
                    <td>...</td>
                    <td></td>


                </tr>
                </tbody>

            </table>
        </div>
    );
}

export default ManageFlashcards;