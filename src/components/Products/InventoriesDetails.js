// import React, { useEffect, useState } from 'react';

// import './InventoriesDetails.css';
// import InventoryDetails from '../InventoryDetails/InventoryDetails';



// const InventoriesDetails = () => {

//     const [inventoriesDetails, setInventoriesDetails] = useState([]);
//         console.log(inventoriesDetails)
//     useEffect(() => {
//         fetch('inventoriesDetails.json')
//             .then(res => res.json())
//             .then(data => setInventoriesDetails(data));
//     }, [])



//     return (
//         <div>
//             <h2 className='inventoriesDetails-title'>Our Products</h2>

//             <div className='inventory-container'>
//             {
//                 inventoriesDetails.map(inventoryDetails => <InventoryDetails
//                     key={inventoryDetails.id}
//                     inventoryDetails={inventoryDetails}

//                 ></InventoryDetails>)
//             }

//             </div>
//         </div>
//     );
// };

// export default InventoriesDetails;