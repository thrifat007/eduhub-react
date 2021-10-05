import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import './Home.css';
import NewsLetter from './NewsLetter';
import Popular from './Popular';

const Home = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./eduData.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])


    return (
        <div>
            <div className="hero">
                <h1>Online Courses from Edu-Hub<span>- Join For Free -</span></h1>
            </div>

            <div className='container-fluid'>
                <h2 className='text-center my-4 p-4'>Popular Courses</h2>
                <Row xs={1} md={4} className="g-3">
                    {Array.from({ length: 1 }).map((_, idx) => (

                        courses.slice(0, 4).map(popular => <Popular
                            key={popular.id}
                            popular={popular}
                        ></Popular>)

                    ))}
                </Row>
            </div>

            <div className='my-5'>
                <NewsLetter></NewsLetter>
            </div>
        </div>
    );
};

export default Home;

// src='./images/banner1.jpg'