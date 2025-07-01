

import { useState } from 'react';
import TemperatureChart from './components/TemperatureChart';
import ErrorBoundary from './components/ErrorBoundary';
import useTemperature from './hooks/useTemperature';

function App() {
  const [error] = useState(null);
  const { temperatures, isLoading, rateLimited } = useTemperature();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <ErrorBoundary>
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Real-Time Temperature Dashboard
        </h1>

        {rateLimited && (
          <div className="text-yellow-600 bg-yellow-100 px-4 py-2 rounded mb-4">
            ⚠️ Too many requests. Please wait a moment...
          </div>
        )}

        {isLoading ? (
          <div className="text-lg text-gray-600">Loading...</div>
        ) : error ? (
          <div className="text-red-500 text-lg">{error}</div>
        ) : (
          <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
            <TemperatureChart data={temperatures} />
          </div>
        )}
      </ErrorBoundary>
    </div>
  );
}

export default App;
