


import { useState, useEffect } from 'react';
import axios from 'axios';

const useTemperature = () => {
  const [temperatures, setTemperatures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rateLimited, setRateLimited] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchTemperature = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/temperature/', {
          signal: controller.signal,
        });
        const { temperature, timestamp } = response.data;
        setTemperatures(prev => [...prev.slice(-29), { temperature, timestamp }]);
        setRateLimited(false);
      } catch (error) {
        if (axios.isCancel(error)) return;
        if (error.response?.status === 429) {
          setRateLimited(true);
          console.warn('Rate limit exceeded');
        }
      }
    };

    const interval = setInterval(fetchTemperature, 1000);
    fetchTemperature().then(() => setIsLoading(false));

    return () => {
      clearInterval(interval);
      controller.abort();
    };
  }, []);

  return { temperatures, isLoading, rateLimited };
};

export default useTemperature;
