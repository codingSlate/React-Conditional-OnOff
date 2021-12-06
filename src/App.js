import React from 'react';
import MySwitcher from './MySwitcher';
import MySwitcher2 from './MySwitcher2';
import './style.css';
export default function App() {
  return (
    <div>
      <h1>Switch ON/OFF</h1>
      <MySwitcher />
      <br/>
      <MySwitcher2 />
    </div>
  );
}
