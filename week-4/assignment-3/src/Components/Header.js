import React, { useState } from 'react';

const Header = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome Message');

  const handleClick = () => {
    setWelcomeMessage('Have a Good Time!');
  };

  return (
    <header className="header" onClick={handleClick}>
      {welcomeMessage}
    </header>
  );
}

export default Header;
