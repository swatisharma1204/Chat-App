# 💬 MERN Chat App

A **real-time chat application** built with the **MERN stack (MongoDB, Express.js, React, Node.js)** and **Socket.io**.  
Users can sign up, log in, and chat with others instantly. The app also shows online user status and supports media uploads.

---

## 📂 Project Structure
Chat-App/  
│-- backend/   # Node.js + Express + MongoDB + Socket.io  
│-- frontend/  # React + TailwindCSS + DaisyUI  

---

## 🚀 Features
- Authentication & Authorization (JWT)  
- Real-time messaging with **Socket.io**  
- Online user status indicator  
- Global state management with **Zustand**  
- Image/file uploads via **Cloudinary**  
- Error handling on both client & server  
- Free deployment-ready setup  

---

## ⚙️ Setup

### Backend
```bash
cd backend
npm install
npm run dev
```

Runs on 👉 http://localhost:5003

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Runs on 👉 http://localhost:5173 (Vite)

## 🛠️ Tech Stack

Frontend: React, TailwindCSS, DaisyUI, Zustand
Backend: Node.js, Express.js, Socket.io, JWT
Database & Storage: MongoDB, Cloudinary