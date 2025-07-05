# 📚 ReadMate (Library Management System)

A Library Management System built with React, TypeScript, and Redux Toolkit Query (RTK Query). It provides core functionalities for managing a library including book cataloging and borrowing operations. It is designed to be publicly accessible without login, making it ideal for small public libraries or demo purposes.

- **Live Link** - https://library-management-frontend-beryl-seven.vercel.app

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **RTK Query**
- **React Router**

## ✨ Features

### 1. 🔓 Public Routes

- All pages are accessible without login or authentication.
- No user-specific features purely public and open.

### 2. 🛠️ Book Management

#### 📋 Book List

- Displays a list of all books in the system.
- Action Buttons:
  - ✏️ **Edit Book**: Opens form pre-filled with book info. Updates book via API.
  - 🗑️ **Delete Book**: Confirms and deletes book from system.
  - 📖 **Borrow Book**: Opens form to borrow the selected book.

#### ➕ Add New Book

- Provides a form to create and add new books.
- Fields: `Title`, `Author`, `Genre`, `ISBN`, `Description`, `Copies`, and optional `Available`.
- Automatically sets `Available` to true unless specified.

### 3. 📦 Borrow Book

- Users can borrow books using the Borrow Book Form.
- Prevents borrowing if no copies are left

### 4. 📊 Borrow Summary

- A separate summary view displaying all borrowed books.

---

## 🧪 Development & Running Locally

### Clone the repository

```bash
git clone https://github.com/farhana988/Library-Management-Frontend.git
cd library-management-frontend
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```
