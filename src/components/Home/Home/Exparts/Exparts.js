import React from 'react';
import expart1 from '../../../../Images/1397818697_1-org.webp';
import expart2 from '../../../../Images/portrait-smiling-man-working-bike-260nw-216467359.webp';
import expart3 from '../../../../Images/opiu3kQGmzwrbCKkB5EScb-768-80.jpg';
import Expart from '../Expart/Expart';

const Exparts = () => {
    const exparts = [
        {id: 1, name:'will Smith', img: expart1},
        {id: 2, name:'jhon Smith', img: expart2},
        {id: 3, name:' Dwayne', img: expart3},
    ]
    return (
        <div>
          <h2 id='exparts' className='text-center' mt-3>our all exparts</h2>
        <div className='exparts-container'>
            {
              exparts.map(expart => <Expart
                   key={expart.id}
                   expart={expart}
              >
              </Expart>)  
            }
        </div>
        </div>
    );
};

export default Exparts;