import React from 'react';
import logo from '../../assets/images/logo512.png'

const Home = () => {
    return (
        <div>
            <div className="text-center">
                <img src={logo} alt="react logo"/>
            </div>
            <h1 className="text-center mt-4">
            Welcome HOme
            </h1>
        </div>
    )
}

export {Home}
