import {ListGroup, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import {fetchFlashcardsData} from "../../ApiCalls";
import './ManageFlashcards.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const ManageFlashcards = () =>{

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
                </tr>
                </thead>

                <tbody>
                {data && data.map((item, index) => (
                    <tr>
                        <td>{index+1}</td>
                        <td>{item.frontside}</td>
                        <td>{item.backside}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ManageFlashcards;