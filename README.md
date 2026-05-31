# 🚀 Blogify - Full Stack Blog Application

**Blogify** is a modern full-stack blogging platform that allows users to explore, read, and interact with blogs across different categories in a clean and user-friendly interface.

---

## ❗ Problem It Solves

In today’s digital space, most blogging platforms are either:

* ❌ Too complex for beginners
* ❌ Not well organized by categories
* ❌ Lack proper authentication & personalization
* ❌ Poor user experience on smaller devices

👉 Users struggle to **find relevant content easily** and **manage their profiles smoothly**.

---

## 💡 Solution (What Blogify Does)

**Blogify solves these problems by:**

* ✅ Providing **simple and clean UI** for easy navigation
* ✅ Offering **category-based blog filtering** (like Devotional, Trending, etc.)
* ✅ Enabling **secure authentication (Login/Register)**
* ✅ Allowing users to **upload profile images**
* ✅ Delivering a **fast and responsive experience**

👉 In short:
**“Blogify makes discovering and reading blogs simple, organized, and user-friendly.”**

---

## 📌 Features

* 🔐 User Authentication (Register / Login / Logout)
* 📸 Profile Image Upload (Cloudinary)
* 📝 Explore Blogs
* 🔎 Category-based Filtering
* 🍪 JWT Authentication with Cookies
* ⚡ Responsive UI

---

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


