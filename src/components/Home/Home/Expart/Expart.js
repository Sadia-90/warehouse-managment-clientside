import React from 'react';
import './Expart.css'


const Expart = ({expart}) => {

    const {name, img} = expart;
   
    return (
       
      
        <div>
           
            <div className='expart-container'>
               
              
                <img height={200} width={250} src={img} alt="" />
                
                    <h3>Name: {name}</h3>
                    <p>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                    </p>
               
                
            </div>
           

        </div>


    );
};

export default Expart;