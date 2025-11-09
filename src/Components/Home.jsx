import React from 'react';
import useGameHooks from '../Hooks/useGameHooks';
import GameSection from '../pages/GameSection';
import ImageSlider from './ImageSlider';

const Home = () => {
    const {games} =useGameHooks();
    const gamesSort = games.sort((a, b) => b.ratings - a.ratings )
    // console.log(gamesSort);
    return (
        <div> 
            <ImageSlider></ImageSlider>
            <div className="popular w-11/12 mx-auto">
                <h1 className='text-2xl font-bold'>Popular Games</h1>
            </div>

            <div className="section px-5 w-11/12 mx-auto grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-5 my-8 ">
            
            {
                gamesSort.map((game,index) => <GameSection key={index} game={game}></GameSection>)
            }
            
            </div>
        </div>
    );
};

export default Home;