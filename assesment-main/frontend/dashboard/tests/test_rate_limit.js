import http from 'k6/http';
import { check } from 'k6';
export default function () {
  const res = http.get('http://127.0.0.1:8000/temperature/',);
  check(res, {
    'status is 200 or 429': (r) => r.status === 200 || r.status === 429,
  });
}

export const options = {
  vus: 150,
  duration: '5s',
};

//k6 run tests/test_rate_limit.js
