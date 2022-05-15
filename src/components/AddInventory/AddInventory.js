import React from 'react';

const AddInventory = () => {

const handleSubmit = event =>{
    event.preventDefault();
   
       const name = event.target.name.value;
        const email = event.target.email.value;
       
       const user = {name, email};
  
     fetch('http://localhost:5000/user',{
         method: 'POST',
         headers: {
             'content-type': 'application/JSON'
         },
         body: JSON.stringify(user)
     })
     .then(res => res.json())
     .then(data =>{
         console.log('success', data)
     })
};


    return (
        <div className='container w-50 mx-auto mt-4'>
            <form onSubmit={handleSubmit}>

              
            <br/>
                   <input type="text" name='name' placeholder='name' required/>
            
                <br/>
             
                    
                   <input type="email" name='email' placeholder='Email' />
                  
                
                <br/>
                
                <input type="submit" value="Add User" />
                  
            </form>
            
           
        </div>
    );
};

export default AddInventory;