# ⏱️ Stopwatch with Timer (JavaScript)

A simple **Stopwatch and Timer web application** built using **HTML, CSS, and Vanilla JavaScript**.
The app allows users to start, stop, reset the timer, fetch the current time, and display messages dynamically.

---

## 📸 Preview

Dark-themed stopwatch UI with:

* Large time display
* Start / Stop / Reset controls
* Message log area for timestamps

---

## 🛠️ Tech Stack

* **HTML5** – Structure & layout 
* **CSS3** – Styling & responsive UI 
* **JavaScript (ES6)** – Timer logic & DOM manipulation 

---

## 📂 Project Structure

```bash
Stopwatch-with-Timer/
│
├── index.html      # Main HTML structure
├── styles.css      # UI styling
└── script.js       # Stopwatch logic
```

---

## ⚙️ Features

* ▶️ **Start Timer** – Begins counting seconds
* ⏸️ **Stop Timer** – Stops timer and logs stop time
* 🔄 **Reset Timer** – Resets time back to 0
* ⏱️ **Get Time** – Displays current elapsed time
* 🧹 **Clear Messages** – Clears all logged messages
* 📝 **Message Area** – Dynamically displays time logs

---

## 🚀 How It Works

* Uses `setInterval()` to increment time every second
* Prevents multiple intervals from running at once
* Uses DOM manipulation to:

  * Update the timer display
  * Append messages dynamically
  * Clear message history

---

## ▶️ How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Stopwatch-Timer.git
   ```

2. Navigate into the project folder:

   ```bash
   cd Stopwatch-timer
   ```

3. Open `index.html` in your browser:

   * Double-click the file
     **OR**
   * Use Live Server in VS Code (recommended)

---

## 🧠 Learning Outcomes

This project helps practice:

* `setInterval()` and `clearInterval()`
* DOM selection and manipulation
* Event handling (`addEventListener`)
* Dynamic element creation
* UI state management

---

## 🧩 Possible Enhancements

* Format time as **MM:SS**
* Add lap functionality
* Disable buttons based on state
* Add animations or sound effects
* Convert to a React component

---

## 📄 License

This project is open-source and free to use for learning and personal projects.

---

## 🙌 Acknowledgements

Built as a **practice project** to strengthen JavaScript fundamentals and DOM manipulation skills.

---


