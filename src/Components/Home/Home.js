import React, { useEffect, useState } from 'react';

const Home = () => {
    const [meal, setMeal] = useState([]);
    useEffect(() =>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
        .then(res => res.json())
        .then(data => console.log(data));

    },[])
    return (
        <div>
            
        </div>
    );
};

export default Home;