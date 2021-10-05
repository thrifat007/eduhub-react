import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from './Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./eduData.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])


    return (
        <div className='container-fluid ps-5 pe-5 pt-3 pb-5 mb-5  mx-auto'>
            <h2 className='text-center py-4'>Courses Available Right Now</h2>
            <Row xs={1} md={4} className="g-3">
                {Array.from({ length: 1 }).map((_, idx) => (

                    courses.map(course => <Course
                        key={course.id}
                        course={course}></Course>)

                ))}
            </Row>
        </div>
    );
};

export default Courses;