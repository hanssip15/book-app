# Book Tracker App

A full-stack web application for managing your reading list, built with Flask and React. Build for People Recruitment Test. Integration with backend only works on page Library section Browse Library.

<img src="./assets/home.png" height="200" alt="Home">
<img src="./assets/library.png" height="200" alt="Library">

## Features

- 📚 Add, view, update, and delete books
- 📖 Track reading status (unread/reading/completed)
- 🎨 Modern and responsive UI with Tailwind CSS
- 🔄 Real-time updates
- ⚡ Fast and efficient with React + Vite
- 🛡️ Type-safe with TypeScript

## Tech Stack

### Backend
- Python 3.x
- Flask
- Flask-CORS
- SQLAlchemy
- python-dotenv

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Axios
- shadcn/ui components

## Prerequisites

- Python 3.x
- Node.js 16.x or later
- npm or yarn

## Getting Started

### Backend Setup

1. Create and activate a virtual environment:
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

2. Install backend dependencies:
```bash
pip install -r requirements.txt
```

3. Start the Flask server:
```bash
cd backend
python app.py
```

The backend server will start on http://localhost:5000

### Frontend Setup

1. Install frontend dependencies:
```bash
cd frontend
npm install
```

2. Start the development server:
```bash
npm run dev
```

The frontend will be available at http://localhost:5173

## API Documentation

### Endpoints

#### GET /api/books
- Returns all books
- Response: Array of book objects

#### POST /api/books
- Creates a new book
- Request Body:
```json
{
  "title": "string",
  "author": "string",
  "status": "unread" | "reading" | "completed"
}
```

#### PUT /api/books/<id>
- Updates an existing book
- Request Body: Same as POST

#### DELETE /api/books/<id>
- Deletes a book by ID

## Project Structure

```
book-tracker-app/
├── backend/
│   └── app.py              # Flask backend API
├── frontend/
│   ├── src/
│   │   ├── types/
│   │   │   └── book.ts     # TypeScript interfaces
│   │   ├── services/
│   │   │   └── api.ts      # API service functions
│   │   ├── App.tsx         # Main React component
│   │   ├── main.tsx        # React entry point
│   │   └── index.css       # Global styles
│   ├── tailwind.config.js  # Tailwind configuration
│   └── package.json        # Frontend dependencies
└── requirements.txt        # Backend dependencies
```

## Development

### Backend Development
- The backend uses Flask for the API
- CORS is enabled for frontend communication
- Currently using in-memory storage (can be extended to use a database)

### Frontend Development
- Built with React + Vite for fast development
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui components for consistent UI

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Authentication system
- [ ] Search and filtering
- [ ] Sorting options
- [ ] Book categories/tags
- [ ] Reading progress tracking
- [ ] Book ratings and reviews
- [ ] Database integration
- [ ] User profiles and personal libraries

## License

This project is licensed under the MIT License - see the LICENSE file for details.


# Test Instruction

Hi there! 👋  
Thanks for applying to our internship program.

This is a small take-home assignment where you'll contribute to a simple **Book Tracker App**.  
You can choose how to contribute based on your strongest area: **Frontend, Backend, DevOps, QA, or Data**.

---

## 🧭 Goal

We want to see how you solve problems, write code, and structure your work — all in about **2–4 hours**.

---

If you're applying for **DevOps**, **QA**, or **Data**, you can use the provided base code in the `backend/` or `frontend/` folders.

---

## ✅ What to Do

1. **Fork this repo** into your own GitHub account.
2. **Pick ONE area** you're confident in:
   - Frontend
   - Backend
   - DevOps
   - QA
   - Data
   - Project/Product Manager
   - UI/UX
3. **Work only in the part that fits your chosen role.**
4. Push your code and include in your `README.md`:
   - Your chosen role
   - How to run/test your part
   - Any notes or decisions you made
   - Create Merge Request to the main branch

---

## 🔧 Tasks by Role

### 🔹 Fullstack
- Complete feature for Library > Browse page
    - implement search by name and category
    - add detail page
- Bonus: Add more Essential feature

### 🔹 Frontend
- Build a UI to:
  - User Authentication
  - User Settings
  - User Insight
- No need to connect to BE if API was not available. just create dummy page on FE
- Bonus: Add more Essential feature

### 🔹 Backend
- Build a REST API that supports:
  - Search and filtering
  - Books added to user library
- Use in-memory storage or simple JSON file
- Bonus: Add input validation or simple auth

### 🔹 DevOps
- Use `backend/` or `frontend/` as the app to work on
- Create:
  - `Dockerfile`
  - (Optional) `docker-compose.yml`
  - (Optional) GitHub Actions CI (e.g., lint, test)
- Bonus: Add environment config or deployment steps

### 🔹 QA
- Write test cases (unit/integration) for:
  - API in `backend/`, or
  - UI in `frontend/`
- Tools you can use:
  - Postman, Jest, Supertest, Cypress, Playwright, etc.
- Bonus: Add a test report or coverage info

### 🔹 UI/UX
- Use Figma for Create new design for usecase User Authentication and User Settings/Profile
- Bonus: Add more essential feature page

### 🔹 Project/Product Manager
- Create timeline if i need to add new checkout or payment feature
    - task breakdown
    - imagine you resource of 1 person for each role
    - estimated time
- Tools you can use:
    - Notion, Any Project Management Tools
- Delivery send document link to recruiter emails
- Bonus: Add more timeline for other essential feature


### 🔹 Data
- Give me example dashboard using context or data related to book tracker apps that had feature
    - Books library
    - User Books Library
    - Rent or Buy Books
- Bonus: Output result as Graphic or add business related insight

---

## 🌟 Bonus Points (Optional)

We appreciate extra touches like:

- ✅ Clean code structure / design pattern
- ✅ Branching with meaningful commit history
- ✅ README with clear instructions
- ✅ Use of linters, formatters, or type checkers
- ✅ Tests even if you're not applying for QA
- ✅ CI workflow using GitHub Actions
- ✅ UI polish, error handling, logging, etc.

---

## 🕐 Timebox

This should take around **2–4 hours**.  
No need to overengineer — focus on clarity and your best work in a short time.

---

## 📩 Submission

Once you're done, share your GitHub repo link with us.

Good luck, and have fun! 🚀

## ✏️ Internship Note

Dear recruiter from PT Citra Niaga Teknologi,

Thanks for giving me the opportunity to apply in CNT Tnternship Program.

Here some note about what i did with my homework test.

Roles: Frontend
What i Do:
1. Build UI For Authentication
2. Build UI For User Setting
3. Adding slight changes at components/HeaderNav.tsx

at first, I want to try make an modular page for each menu in index, but there is a problem so i decided to use current implementation.

Work Flow:
1. to get into login menu, you can click on profile icon beside Bell Icon.
2. you must follow the restriction on auth user except login with Google, it will by pass and send you immediately to dashboard menu.
3. the forgot password and sign in page already work.

Once again, thanks for the opportunity. Me personaly got many experience and idea with this homework test. 
I Hope I can join you guys at PT CNT.

Best Regards.

Muhammad Raihan Fasya Mian
Informatics POLBAN Student.

