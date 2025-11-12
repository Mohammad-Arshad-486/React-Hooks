
# 🌤 React Hooks Examples

A React project demonstrating the core **React Hooks** — `useState`, `useEffect`, and `useRef` — through three mini-apps:

* 🧮 **Counter App** – demonstrates state management
* ⏱ **Stopwatch** – demonstrates refs and lifecycle behavior
* 🌦 **Weather App** – demonstrates side effects and API fetching

This project is ideal for beginners learning how to use hooks in real-world scenarios.

---

## 🚀 Features

### 🧮 Counter App

* Built with `useState`.
* Two independent counters:

  * Increment/decrement by **1**.
  * Increment/decrement by **5**.
* Reset button for both counters.
* Smooth hover animations using Tailwind CSS.

### ⏱ Stopwatch

* Built with `useState`, `useRef`, and `useEffect`.
* **Start**, **Stop**, and **Reset** timer functionality.
* Animated hourglass icon when running.
* Cleans up intervals when the component unmounts.

### 🌦 Weather App

* Built with `useState` and `useEffect`.
* Fetches real-time weather data from [WeatherAPI.com](https://www.weatherapi.com/).
* Auto-refreshes every **30 seconds**.
* Displays:

  * Location (India)
  * Temperature (°C)
  * Weather condition text

---

## 🛠️ Technologies Used

* ⚛️ **React (Vite)**
* 💅 **Tailwind CSS**
* 🌐 **WeatherAPI**
* 🧠 **React Hooks:** `useState`, `useEffect`, `useRef`

---

## 📦 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Mohammad-Arshad-486/React-Hooks.git
cd react-hooks
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the root directory and add your WeatherAPI key:

```bash
VITE_WEATHER_API_KEY=your_weather_api_key_here
```

> 🗝️ You can get a free API key from [WeatherAPI.com](https://www.weatherapi.com/).

### 4️⃣ Run the Development Server

```bash
npm run dev
```

## 🧩 React Hooks Overview

| Component   | Hook(s) Used                      | Purpose                    |
| ----------- | --------------------------------- | -------------------------- |
| `Counter`   | `useState`                        | Manage counter values      |
| `Stopwatch` | `useState`, `useRef`, `useEffect` | Timer control and cleanup  |
| `Weather`   | `useState`, `useEffect`           | Fetch and update live data |

---

## 🎨 UI Highlights

* Modern, responsive UI with Tailwind CSS
* Smooth button animations on hover
* Clean layout with fixed headers and SVG icons
* Well-structured, beginner-friendly code
