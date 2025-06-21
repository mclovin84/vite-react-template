import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ThreeCircles from './components/ThreeCircles';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <ThreeCircles />
      </main>
      <Footer />
    </div>
  );
}

export default App;