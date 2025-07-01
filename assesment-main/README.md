# 🌡️ Real-Time Temperature Monitoring Dashboard

This project is a full-stack web application built for the **GizanTech Web Developer Recruitment - June 2025** assignment.

- ✅ **Backend**: Django + Django REST Framework  
- ✅ **Frontend**: React + Tailwind CSS  
- ✅ **Realtime chart updates** with `Chart.js`  
- ✅ **Rate-limited API** (100 requests/second)  
- ✅ **Load-tested** with `k6`  
- ✅ **Logging** of all API usage  

---

## 🚀 Features

- Simulates temperature data between 15°C and 45°C
- Real-time updates every second using `setInterval`
- Rate limit of **100 requests/second** (returns 429 if exceeded)
- Clean, responsive design with Tailwind CSS
- Server-side logging of every request and error

---

## 🧩 Tech Stack

| Layer     | Tools                                     |
|-----------|-------------------------------------------|
| Backend   | Django 5, Django REST Framework           |
| Frontend  | React 18, Tailwind CSS, react-chartjs-2   |
| Tools     | k6 (load testing), Gunicorn, Logging      |

---

## 🖥️ Local Setup Instructions

### 🔧 Backend Setup

```bash
cd backend
python -m venv env
source env/bin/activate  # Windows: env\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver  # or use Gunicorn below


Run with Gunicorn (for production-level load test):
 gunicorn temperature_api.wsgi:application --workers 4 --bind 127.0.0.1:8000


💻 Frontend Setup

cd frontend
cd dashboard
npm install
npm run dev


🔌 API Endpoint
| Method | URL             | Description              | Auth |
| ------ | --------------- | ------------------------ | ---- |
| GET    | `/temperature/` | Returns mock temperature | ❌    |

✅ Sample Response

{
  "temperature": 34.21,
  "unit": "Celsius",
  "timestamp": "2025-06-18T12:34:56.789Z"
}


🧪 Performance Testing
🔁 Rate Limit Test (100 requests/sec)
k6 run tests/test_rate_limit.js
You should see 429 Too Many Requests responses for requests exceeding the limit.

⚙️ Load Test (1000 concurrent users)
k6 run tests/load_test.js
The backend successfully served over 20,000 requests in 30 seconds under simulated 1000 concurrent users.

📄 Logs
All API access, errors, and rate-limited requests are recorded in:
backend/logs/api.log









