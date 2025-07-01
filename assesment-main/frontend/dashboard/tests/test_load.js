import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('http://127.0.0.1:8000/temperature/');
  sleep(1);
}

export const options = {
  vus: 1000,
  duration: '30s',
};

//k6 run tests/test_load.js