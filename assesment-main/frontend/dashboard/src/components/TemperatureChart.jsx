


import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TemperatureChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => new Date(d.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.map(d => d.temperature),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Real-Time Temperature Monitor' },
    },
    scales: {
      y: {
        min: 10,
        max: 50,
        title: { display: true, text: 'Temperature (°C)' },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default TemperatureChart;