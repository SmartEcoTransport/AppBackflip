import React from 'react';
import Login from '@/components/Login'
import Navbar from '@/components/Navbar';
type Props = {
  // Ajoute ici les props que ton composant recevra
};


const MyComponent: React.FC<Props> = (props) => {
  return (
    <div>
      <Navbar/>
      <Login/>
      {/* Ajoute ton contenu ici */}
    </div>
  );
};

export default MyComponent;
