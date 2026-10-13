# MHT-CET College Recommendation

A Node.js, Express, EJS and MySQL web app for finding colleges using a student's location and MHT-CET percentile.

## Requirements

- Node.js (LTS recommended)
- npm
- Access to a MySQL-compatible database with a `CETREC` database and a `colleges` table

## Run in VS Code

1. Extract this folder and open it in VS Code (`File` → `Open Folder`).
2. Open the VS Code terminal (`Terminal` → `New Terminal`).
3. Install packages:

   ```bash
   npm install
   ```

4. Copy `.env.example` to a new file named `.env`.
5. Edit `.env` and enter your own database host, port, username, password and database name. Do not commit `.env` to GitHub.
6. Start the app:

   ```bash
   npm start
   ```

7. Open http://localhost:8080 in your browser.

For automatic restarts during development, use `npm run dev`.

## Database notes

The application expects a MySQL-compatible database with a `colleges` table containing columns used by the app, including `Location`, `cutoff`, and `Institute Code`. The included CSV file may be useful for preparing/importing your data, but its column names and types should be checked before importing.

If you do not have database access yet, the home page may load, but searches and college details require a configured database.

## How recommendations work

The `/find` form searches for colleges matching the selected location and a cutoff within three percentile points above or below the entered percentile. Confirm that this is appropriate for the dataset and intended use before presenting recommendations as official admissions guidance.

## Push to your own GitHub repository

1. Create a **new empty repository** on GitHub (do not initialize it with a README if you plan to push this folder as-is).
2. In the VS Code terminal, run:

   ```bash
   git init
   git add .
   git commit -m "Set up MHT-CET college recommendation app"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

3. Replace the remote URL with your actual GitHub repository URL.

Only upload code and data you have permission to publish. Review the CSV for personal, licensed, or otherwise restricted data before making the repository public.
