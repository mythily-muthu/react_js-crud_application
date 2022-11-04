import React, { useState } from 'react';
import { Button, Form, FormControl } from "react-bootstrap";
import Employees from './Employees';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';
import Add from "./components/Add";


function Add() {

    let [name, setName] = useState("");
    let [age, setAge] = useState("");

    let history = useNavigate();


    let handleSubmit = (e) => {
        e.preventDefault();

        let ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let a = name,
            b = age;

        Employees.push({ id: uniqueId, Name: a, Age: b });

        history("/");
    }

    return <div>
        <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
            <Form.Group className='mb-3' controlId='formName'>
                <FormControl
                    type='text'
                    placeholder='Enter Name'
                    required
                    onChange={(e) => setName(e.target.value)}>

                </FormControl>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formAge'>
                <FormControl
                    type='text'
                    placeholder='Enter age'
                    required
                    onChange={(e) => setAge(e.target.value)}>

                </FormControl>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>
    </div>;

}

export default Add