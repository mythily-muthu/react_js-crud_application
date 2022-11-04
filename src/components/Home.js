import React, { Fragment } from 'react'
import { Button, Table } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom"


let Home = () => {

    let history = useNavigate();

    let handleEdit = (id, name, age) => {
        localStorage.setItem("Name", name);
        localStorage.setItem("Age", age);
        localStorage.setItem("Id", id);
    }






    let handleDelete = (id) => {
        let index = Employees.map((e) => {
            return e.id
        }).indexOf(id)
        //based on the id its taking the index and deleting the item
        //index -> array -> deleting -> particular id

        Employees.splice(index, 1);

        history("/");

    }
    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <Table striped bordered hover color='lime'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0 ?
                                Employees.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.Name}</td>
                                            <td>{item.Age}</td>
                                            <td>
                                                <link to={"/edit"}>
                                                    <Button onClick={() => handleEdit(item.id, item.Name, item.Age)}>Edit</Button>
                                                </link>

                                                &nbsp;

                                                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                            </td>
                                        </tr>

                                    )
                                })
                                : "No datas available"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <link className='d grid gap-2' to="/create">
                    <Button size='sm'>Create</Button>
                </link>

            </div>
        </Fragment>
    )
}

export default Home; 