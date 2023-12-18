
import React from 'react'

const Notfound = () => {
  return (
    <div>
      {/* <p>404 page not found</p> */}

      <div className="flex items-center justify-center h-screen w-screen bg-gray-200">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
          <p className="text-xl text-black">Oops! Page not found.</p>
          {/* You can add more content or links here */}
        </div>
      </div>


    </div>
  );
}

export default Notfound
