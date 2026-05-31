
## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Cloudinary
* Express-fileupload

---

## 📂 Project Structure

```id="g4k2f2"
Blogify/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── context/
│   └── App.jsx
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── jwt/
│   └── index.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash id="plj1sy"
git clone https://github.com/your-username/blogify.git
cd blogify
```

---

### 2️⃣ Backend Setup

```bash id="2r9m7z"
cd backend
npm install
```

Create `.env` file:

```env id="4v0hjo"
PORT=4001
MONOG_URI=your_mongodb_url

JWT_SECRET=your_secret_key

CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_api_key
CLOUD_SECRET_KEY=your_secret_key

FRONTEND_URL=http://localhost:5173
```

Run backend:

```bash id="9ntrgm"
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash id="y0s3w4"
cd frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

### Auth Routes

* `POST /api/users/register`
* `POST /api/users/login`
* `GET /api/users/myProfile`
* `GET /api/users/logout`

### Blog Routes

* `GET /api/blogs/all-blogs`

---

## 🧠 Key Learnings

* Handling multipart/form-data
* Fixing CORS issues
* JWT authentication flow
* Frontend + backend integration debugging
* Real-world error handling

---

## 🚀 Future Improvements

* ✍️ Blog creation dashboard
* ❤️ Like & Comment system
* 🔍 Search functionality
* 🌙 Dark mode
* 📱 Better mobile optimization

---

## 👨‍💻 Author

**Shagufta Fatima**
full stack blogify app

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---


