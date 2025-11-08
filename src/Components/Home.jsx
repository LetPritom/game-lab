import React from 'react';
import useGameHooks from '../Hooks/useGameHooks';

const Home = () => {
    const {game} =useGameHooks();
    console.log(game)
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;