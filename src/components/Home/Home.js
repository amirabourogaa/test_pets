import React from 'react';
import {Link} from "react-router-dom"
const Home = () => {
    return (
        <div>
          
            <h2>Welcome to my <Link to="/pets">pets </Link></h2>

           
        </div>
    );
}

export default Home;
