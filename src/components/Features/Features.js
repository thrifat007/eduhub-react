import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import Popular from '../Home/Popular';
import Feature from './Feature';

const Features = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./eduData.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])


    return (
        <div className='mt-5 p-5'>
            <h2>Featured Content</h2>

            <div className='container'>
                {
                    courses.slice(0, 6).map(popular => <Feature
                        key={popular.id}
                        popular={popular}
                    ></Feature>)
                }
            </div>

           
        </div>
    );
};

export default Features;