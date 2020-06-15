import './App.scss';
import React from 'react';
import AppRouter from '../../appRouter';


export default function App(): JSX.Element {
  return (
    <div className="container">
      <AppRouter/>
    </div>
  );
}