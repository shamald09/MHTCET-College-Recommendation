# 🎓 MHT-CET College Recommendation System

A web-based college recommendation system designed to help students find suitable engineering colleges based on their **MHT-CET percentile, preferred engineering branch, and region in Mumbai**.

The project uses a Node.js backend and MySQL database to organize college-related information and help students explore relevant options.

## ✨ Features

- **Percentile-Based Recommendations:** Find colleges matching your MHT-CET percentile.
- **Branch Selection:** Explore colleges offering your preferred engineering branch.
- **Region-Wise Filtering:** Filter colleges across the Central, Western, and Harbour regions of Mumbai.
- **College Information:** Organize information about cutoffs, fees, seat intake, and placements.
- **Web Interface:** Access the recommendation system through a browser.
- **Database Integration:** Use MySQL to store and retrieve college information.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and layout |
| JavaScript | Client-side functionality |
| Node.js | Server-side JavaScript runtime |
| Express.js | Backend routing and application server |
| EJS | Dynamic page rendering |
| MySQL | College data storage |
| Git & GitHub | Version control and project hosting |

## 🏗️ Project Architecture

```text
User
  |
  v
Web Interface
(HTML, CSS, JavaScript, EJS)
  |
  v
Node.js + Express.js
  |
  v
MySQL Database
  |
  v
College Information
(Cutoffs, Branches, Fees,
 Intake, Placements, Regions)
```

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- [MySQL Server](https://dev.mysql.com/downloads/mysql/)
- [Git](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/shamald09/MHTCET-College-Recommendation.git
```

### 2. Navigate to the project directory

```bash
cd MHTCET-College-Recommendation
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project's root directory and configure your MySQL connection:

```dotenv
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=cet_college
```

Replace the example password with your own MySQL credentials.

**Security:** Never commit your `.env` file or expose database passwords in your source code.

### 5. Create the database

Connect to your MySQL server and execute:

```sql
CREATE DATABASE cet_college;
```

Import or create the required college tables and populate them with the dataset supplied for the project before using database-dependent features.

### 6. Start the application

```bash
npm start
```

Open your browser and visit:

**http://localhost:8080**

> Note: Database-dependent functionality requires a valid MySQL connection and the correct database schema and data.

## 📂 Project Overview

The application is intended to help MHT-CET aspirants explore engineering colleges using relevant admission preferences.

The database supports information such as:

- College names and locations
- Engineering branches
- Admission cutoff percentiles
- Fee information
- Seat intake
- Placement-related details

The recommendation results depend on the college data available in the database.

## 🎯 Project Objectives

- Simplify engineering college discovery for MHT-CET aspirants.
- Make college exploration more organized and accessible.
- Allow students to narrow down options by percentile, branch, and region.
- Provide a foundation for a more data-driven college recommendation platform.

## 🔮 Future Enhancements

- Add historical cutoff analysis across admission rounds.
- Improve recommendations using category and admission-quota information where applicable.
- Introduce side-by-side college comparisons.
- Add user accounts and saved college preferences.
- Deploy the application online for easier access.
- Improve validation, testing, and the recommendation algorithm.

## 👨‍💻 Author

**Shamal B. Deore**

- GitHub: [@shamald09](https://github.com/shamald09)

## 📄 License

Choose and add a license before redistributing this project. Until a license is included, assume the repository is subject to the default copyright rules.

---

⭐ If you find this project useful, consider starring the repository!
