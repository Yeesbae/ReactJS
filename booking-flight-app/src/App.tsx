import React from 'react';
import './App.css';
import Hello from './components/hello';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div>
      <Header />
      <main className="App-body">
        <Hello name="John"></Hello>
      </main>
      <Footer />
    </div>
  );
}

export default App;
