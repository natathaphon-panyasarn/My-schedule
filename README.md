# Weekly Schedule · ตารางชีวิตประจำสัปดาห์

A minimal, aesthetic, and fully functional web application for managing your weekly schedule.
It runs completely in the browser and automatically saves your data using `localStorage` — no
backend, no database, no sign-up required.

<p align="center">
  <strong>HTML5 · CSS3 · Vanilla JavaScript</strong><br>
  Zero dependencies · Zero build step
</p>

---

## Live Demo

> **[View the live demo →](https://natathaphon-panyasarn.github.io/My-schedule/)**

_Replace the link above with your deployed GitHub Pages URL._

---

## Features

- **Bilingual Support** — Instantly toggle between **English** and **Thai** with a single click.
- **Immersive Themes** — Two hand-crafted themes:
  - 🌌 **Deep Space** (Dark Mode) — a starry, nebula-filled night sky.
  - ☁️ **Daytime Sky** (Light Mode) — an airy, cloud-like aesthetic with glassmorphism UI.
- **Custom Highlight Categories** — Create your own categories, pick a color, and assign them to specific activities.
- **Dynamic Editor** — Easily add, edit, or remove time slots and activities for any day of the week.
- **Weekly Overview** — A horizontal-scrolling table displaying the entire week's schedule with color highlights.
- **Privacy-Focused** — No backend or database. Everything is saved locally in your browser.

---

## Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Structure  | HTML5                               |
| Styling    | CSS3 (Custom Properties, Glassmorphism) |
| Behavior   | Vanilla JavaScript (ES6+)           |
| Storage    | `localStorage`                      |
| Frameworks | _None_                              |

---

## Project Structure

```
My-schedule/
├── index.html    # Markup & layout
├── style.css     # Themes, glassmorphism, and responsive styling
├── script.js     # App logic, i18n, categories, and persistence
└── README.md     # You are here
```

---

## How to Use

### 1. Run Locally

No installation or build step is required.

```bash
# Clone the repository
git clone https://github.com/your-username/My-schedule.git

# Open the project folder, then simply open index.html in your browser.
```

Alternatively, serve it with any static server:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000` in your browser.

### 2. Editing Your Schedule

1. **Pick a day** using the day tabs (Monday – Sunday).
2. **Add a time slot** with the **+ Add time slot** button.
3. **Edit freely** — click any time or activity field to change its text.
4. **Remove** an activity using the **×** button on its row.

### 3. Creating & Applying Highlight Categories

1. In the **Highlight categories** panel, press **+ Add category**.
2. Give it a **name** and choose a **color**.
3. In the day editor, click the **colored dot** next to an activity.
4. Select a category from the popover — its color is applied to that time slot.
5. The **Weekly overview** table renders the same colors automatically.

### 4. Themes & Language

- Click the **sun/moon** button to switch between **Deep Space** and **Daytime Sky**.
- Click the **globe** button to toggle between **EN** and **TH**.

### 5. Clearing Data

- Press the **Clear** button in the day panel header to reset all schedule data and categories.
  You will be asked to confirm before anything is deleted.

---

## Data & Privacy

All schedule data and categories are stored entirely in your browser via `localStorage`
(keys: `lifeScheduleTH`, `lifeScheduleCats`, `lifeScheduleTheme`, `lifeScheduleLang`).
Nothing is ever sent to a server. Clearing your browser storage will remove your data.

---

## Deployment (GitHub Pages)

This project runs directly from the root `index.html` and is ready to host on GitHub Pages:

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set the source to the **`main`** branch and the **`/root`** folder.
4. Save — your site will be live at `https://your-username.github.io/My-schedule/`.

---

## Browser Support

Works in all modern browsers that support ES6+, CSS Custom Properties, and `localStorage`
(Chrome, Edge, Firefox, Safari).

---

## Author

Created by **Natathaphon Panyasarn**.

---

## License

Released under the **MIT License**. © Natathaphon Panyasarn. All rights reserved.
