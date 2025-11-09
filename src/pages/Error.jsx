import React from 'react';
import useTitle from '../Hooks/useDynamicTitle';

const Error = () => {

  useTitle('Error');
  
    return (

        
        <div>
            <h1 className='text-2xl'>404 Not Found ! </h1>
        </div>
    );
};

export default Error;