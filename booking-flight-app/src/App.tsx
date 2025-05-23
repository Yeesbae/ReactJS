import React from 'react';
import './App.css';
import Hello from './components/hello';
import { Header } from './components/Header/header';
import { Footer } from './components/Footer/footer';
import { Booking } from './pages/booking';

function App() {
  return (
    <div>
      <Header />
      <main className="App-body">
        {/* <Hello name="John"></Hello> */}
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
