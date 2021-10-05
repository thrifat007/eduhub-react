import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    console.log(props.course);

    const {image, course_name, mentor, mentor_email, schedule, course_description} = props.course

    return (
        <Col md={3}>
            <Card className='h-100' >
                <Card.Img variant="top" src={image} height='300' />
                <Card.Body>
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Text>
                        <p className='fs-6'>
                            <small className='text-muted'>By:</small> {mentor}  <br />
                            <small className='text-muted'>Starts from:</small> {schedule}  <br />
                            <small className='text-muted'>Mentor Email:</small> {mentor_email}  <br />
                        </p>
                        {course_description.substring(0,150)}... <br />
                        <button className='my-button btn-dark mt-3 p-3 container'>Click to enroll</button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;