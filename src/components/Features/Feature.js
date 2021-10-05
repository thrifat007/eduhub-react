import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Feature = (props) => {
    const { image, course_name, mentor, mentor_email, schedule, course_description } = props.popular

    console.log(props);

    return (
        <Card className="text-center h-100 mt-4">
            <Card.Body className='d-flex'>
                <Card.Img variant="top" src={image} />

                <Card.Text className='p-5'>
                    <Card.Title className="mt-5">{course_name}</Card.Title>
                    <small className='text-muted my-4'>By:</small> {mentor}  <br />
                    {course_description.substring(0, 350)}... <br />
                    <button className='my-button btn-dark mt-3 p-1'>Read More</button>
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted">{schedule}</Card.Footer>
        </Card>

        // <Col md={3}>

        //     <Card className=' ' >
        //         <Card.Img variant="top" src={image} height='300' />
        //         <Card.Body>
        //             <Card.Title>{course_name}</Card.Title>
        //             <Card.Text>
        //                 <p className='fs-6'>
        //                     <small className='text-muted'>By:</small> {mentor}  <br />
        //                     <small className='text-muted'>Starts from:</small> {schedule}  <br />
        //                     <small className='text-muted'>Mentor Email:</small> {mentor_email}  <br />
        //                 </p>
        //                 {course_description.substring(0, 150)}... <br />
        //                 <button className='my-button btn-dark mt-3 p-3 container'>Click to enroll</button>
        //             </Card.Text>
        //         </Card.Body>
        //     </Card>
        // </Col>
    );
};

export default Feature;