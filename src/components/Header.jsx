// import React from 'react';

// const Header = () => {
//     return (
//         <header className="bg-black text-white flex justify-between items-center p-4">
//             <div className="flex items-center">
//                 <img src="https://flightexpert.com/_next/static/media/fe-logo.712b9c71.svg" alt="Logo" className="h-20  w-10mr-2" />
                
//             </div>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                 Sign-In
//             </button>
//         </header>
//     );
// }

// export default Header;





// import React from 'react';
// import flightexpert from '../assets/flightexpert.png';

// const Header = () => {
//     return (
//         <header className="bg-gray-800 text-white flex justify-between items-center p-4">
//             <div className="flex items-center">
//                 <img src={flightexpert} alt="Logo" className="h-8 w-8 mr-2" />
                
//             </div>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                Sign-in
//             </button>
//         </header>
//     );
// }

// export default Header;


import React from 'react';
// import flightexpert from '../assets/flightexpert.png'; // Make sure the path is correct

const Header = () => {
  return (
    
    <header className="text-white flex justify-between items-center p-4 shadow-xl">
      <div className="flex items-center ml-32">
        <img src="https://flightexpert.com/_next/static/media/fe-logo.712b9c71.svg" alt="Logo" className="h-10 w-18" />
      </div>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-28 rounded">
        Sign-in
      </button>
    </header>
    
  );
}

export default Header;
