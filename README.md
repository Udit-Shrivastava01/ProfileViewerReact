# Profile Viewer React

A simple profile-card gallery built using **React, Vite, and Tailwind CSS**. This project displays a collection of people with their profile images, names, roles, social media icons, and action buttons.

## Features

- Displays multiple profile cards using data from a JSON file.
- Reusable React components for cards, buttons, and profile information.
- Shows profile images, names, and professional roles.
- Social media icons using React Icons.
- Styled using Tailwind CSS utility classes.
- Uses Vite for fast development and production builds.

## Tech Stack

- **React** – Building reusable UI components.
- **Vite** – Development server and build tool.
- **Tailwind CSS** – Styling and layout.
- **React Icons** – Social media icons.
- **JSON** – Storing profile information.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Udit-Shrivastava01/ProfileViewerReact.git
   ```

2. Navigate to the project folder:

   ```bash
   cd ProfileViewerReact
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server. |
| `npm run build` | Builds the project for production. |
| `npm run preview` | Previews the production build locally. |
| `npm run lint` | Runs ESLint checks. |

## Project Structure

```text
ProfileViewerReact/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Info.jsx
│   ├── data.json
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

The profile information is stored in `src/data.json`. The main `App.jsx` component imports this data and uses JavaScript's `map()` method to render a reusable `Card` component for each profile.

Each card receives the following properties:

- `name` – The person's name.
- `role` – Their role or profession.
- `imgUrl` – The URL of their profile image.

The `Card` component uses the reusable `Info` and `Button` components to display profile details and action buttons.

### Adding New Profiles

Add another profile entry to `src/data.json` using the same fields:

```json
{
  "name": "Example Name",
  "role": "Frontend Developer",
  "imgUrl": "https://example.com/profile.jpg"
}
```

Ensure the image URL is publicly accessible and follow the existing JSON structure.

## Future Improvements

- Make the layout responsive for mobile, tablet, and desktop screens.
- Connect social media icons to actual profiles.
- Implement functional View and Connect buttons.
- Add profile search and filtering.

## Author

**Udit Shrivastava**

- GitHub: [Udit-Shrivastava01](https://github.com/Udit-Shrivastava01)
- Repository: [ProfileViewerReact](https://github.com/Udit-Shrivastava01/ProfileViewerReact)
