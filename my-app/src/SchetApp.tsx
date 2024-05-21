import React from 'react';
import Schet from './Schet';

const SchetApp: React.FC = () => {
  return (
    <div>
    <h1>Schetchik</h1>
    <Schet initialCount={0}/>
    <Schet initialCount={10}/>
    <Schet initialCount={-5}/>
        </div>
  );
};

export default SchetApp;