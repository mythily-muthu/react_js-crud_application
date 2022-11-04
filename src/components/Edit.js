import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl } from "react-bootstrap";
import Employees from './Employees';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';



function Edit() {

    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [id, setId] = useState("");

    let history = useNavigate();
    let index = Employees.map((e) => {
        return e.id
    }).indexOf(id)

    let handleSubmit = (e) => {
        e.preventDefault();

        let a = Employees[index];
        a.Name = name;
        a.Age = age;

        history("/");
    }

    useEffect(() => {


        setName(localStorage.getItem("Name"))
        setName(localStorage.getItem("Age"))
        setName(localStorage.getItem("Id"))
    }, [])



    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
                <Form.Group className='mb-3' controlId='formName'>
                    <FormControl
                        type='text'
                        placeholder='Enter Name'
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}>

                    </FormControl>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formAge'>
                    <FormControl
                        type='text'
                        placeholder='Enter age'
                        value={age}
                        required
                        onChange={(e) => setAge(e.target.value)}>

                    </FormControl>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="Update">Update</Button>
            </Form>
        </div>)


}