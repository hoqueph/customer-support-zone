import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Footer from './components/footer'; 
import Navbar from './components/navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col justify-between">
       <Navbar /> {/* ✅ Now you're using the Navbar */}
      <div className="p-4">
        <div className="flex justify-center gap-4">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1 className="text-center text-2xl font-bold mt-4">Vite + React</h1>
        <div className="card text-center mt-4">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs text-center mt-2">
          Click on the Vite and React logos to learn more
        </p>
      </div>

      <Footer/> 
    </div>
  );
}

export default App;
