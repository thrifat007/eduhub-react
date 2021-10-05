import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Popular = (props) => {

    const {image, course_name, mentor, mentor_email, schedule, course_description} = props.popular

    console.log(props);
    return (
        <Col md={3}>
            <Card className='h-100' >
                <Card.Img variant="top" src={image} height='400' />
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

export default Popular;