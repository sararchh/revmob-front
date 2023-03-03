import React, { useEffect, useState } from 'react';


const Header: React.FC = () => {

  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    let randomNumber = Math.random();
    setRandomNumber(randomNumber);
  }, []);

  return (
    <header className="w-full h-16 bg-white py-2 px-6 fixed top-0 left-0 shadow-sm">
      <div className='flex items-center justify-end'>
        <img src={`https://api.multiavatar.com/${randomNumber}.svg`}
          alt='avatar'
          className='w-11 mx-2'
        />
        <p>Admin</p>
      </div>
    </header>
  );
}

export default Header;