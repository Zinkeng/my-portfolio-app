import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 p-4">
      <div className="flex justify-center gap-8 mb-8">
        <a
          href="https://vite.dev"
          target="_blank"
          className="hover:scale-110 transition-transform">
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="hover:scale-110 transition-transform">
          <img
            src={reactLogo}
            className="h-24 w-24 animate-spin-slow"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-8 text-slate-800">
        Vite + React + Tailwind
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full mb-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mb-4 transition-colors">
          Count is {count}
        </button>
        <p className="text-slate-600">
          Edit{' '}
          <code className="bg-slate-100 p-1 rounded text-sm font-mono">
            src/App.tsx
          </code>{' '}
          and save to test HMR
        </p>
      </div>
      <p className="text-slate-500 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
