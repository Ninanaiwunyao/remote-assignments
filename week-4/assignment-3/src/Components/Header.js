import React, { useState } from 'react';

function Header() {
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
