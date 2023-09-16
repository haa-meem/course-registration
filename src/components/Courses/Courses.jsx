import React, { useState, useEffect } from 'react';
import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';

const Courses = () => {
    // Define a state variable to store the course data
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch the JSON data here (you can replace the URL with your actual JSON source)
        fetch('fakeData.json')
            .then((res) => res.json())
            .then((data) => {
                // Update the state with the fetched data
                setCourses(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="grid grid-cols-3 gap-3 w-[90%]">
            {courses.map((course) => (
                <div key={course.course_id} className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={course.course_image} alt={course.course_name} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{course.course_name}</h2>
                        <p>{course.course_details}</p>
                        <div className="card-actions flex items-center">
                            <FiDollarSign></FiDollarSign>
                            <span>Price: {course.course_price}</span>
                            <BsBook></BsBook>
                            <span>Credit: {course.course_credit}hr</span>
                        </div>
                        <button className="btn btn-primary w-[90%]">Select</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Courses;
