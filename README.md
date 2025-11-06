# 🐾 Virtual Pet Simulator

An interactive **Virtual Pet Simulator** built with **React.js**, **TailwindCSS**, **Node.js**, and **MongoDB**.  
This project simulates the experience of taking care of a virtual pet — you can **feed**, **play**, and **put your pet to sleep**, while monitoring its **hunger**, **happiness**, and **energy** levels in real-time.

---

## 🚀 Project Overview

This web application combines front-end interactivity with backend data persistence to create a dynamic pet simulation game.

### 🎯 Key Features
- 🐶 **Virtual Pet Character** — Interactive pet with dynamic states and animations  
- 💖 **Pet Attributes** — Hunger, Happiness, and Energy tracked in real-time  
- 🍖 **Pet Interactions** — Feed, Play, and Sleep controls to manage pet behavior  
- ⚡ **Live Attribute Updates** — Smoothly updating progress bars with TailwindCSS  
- 🎨 **Modern UI** — Responsive, animated interface built using TailwindCSS  
- 🗃️ **Database Integration** — Pet states stored and managed with MongoDB  

---

## 🧩 Tech Stack

| Layer | Technology Used |
|-------|------------------|
| Frontend | React.js, TailwindCSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Styling | TailwindCSS Animations & Transitions |
| Package Manager | npm |

---

## 📂 Project Structure

```
virtual-pet-simulator/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── controllers/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/virtual-pet-simulator.git
cd virtual-pet-simulator
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
npm start
```
> Backend runs on default port `5000` (or as configured in `.env`).

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
> Frontend runs on default port `5173` (Vite).

---

## 🕹️ How to Play

1. **Start both frontend and backend servers**  
   - Backend: `npm start`  
   - Frontend: `npm run dev`  

2. **Select your pet** from the available pet options.

3. **Interact with your pet** using the control buttons:
   - 🍖 **Feed** → Decreases Hunger, increases Happiness  
   - 🎾 **Play** → Increases Happiness, reduces Energy  
   - 💤 **Sleep** → Restores Energy, decreases Hunger  

4. **Monitor attributes**:
   - 🟩 Hunger, Happiness, and Energy are displayed as **progress bars** (percentage-based).  
   - Bars update **in real-time** as you interact.

5. **Watch your pet’s animation change**:
   - 🥺 Hungry → Sad animation  
   - 😄 Happy → Cheerful animation  
   - 😴 Sleeping → Sleeping animation  

---

## 🧠 Game Logic

- Each pet has three main attributes:
  - **Hunger** (0–100%)
  - **Happiness** (0–100%)
  - **Energy** (0–100%)
- These attributes **change over time** and through **user interactions**.
- Pet states are **persisted in MongoDB** for continuity.
- When certain thresholds are met (e.g., Hunger > 80%), the pet's **mood and animation** dynamically update.

---

## 🧰 Example Commands

| Command | Description |
|----------|-------------|
| `npm start` | Start the backend server |
| `npm run dev` | Start the frontend server |
| `npm install` | Install dependencies for either frontend or backend |
| `npm run build` | Build the frontend for production |

---

## 🧑‍💻 Author

**👋 Sibsankar Manna **  
Full Stack Developer | React.js | Node.js | MongoDB  

- 🌐 GitHub: https://github.com/SIBSANKARMANNA
- 💼 LinkedIn: https://www.linkedin.com/in/sibsankarmanna/

---

## 🏁 Future Improvements

- 🧠 Add AI-driven pet mood prediction  
- 🎮 Introduce multiple pets and levels  
- 💬 Add speech bubbles or sound effects  
- ☁️ Save pet state to cloud / user account  


### 🐕 Have fun playing with your virtual pet! 🐾
