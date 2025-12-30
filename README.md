# WithYou

WithYou is a minimalist full-stack application built as both a **real product** and a **portfolio project**, focusing on clean architecture, strong fundamentals, and production-ready workflows.

The goal is to demonstrate end-to-end software engineering skills: design, development, testing, CI/CD, and deployment — while keeping the product simple, intentional, and scalable.

---

## Tech Stack

### Development

#### Frontend
- **Language:** TypeScript
- **Framework:** React
- **Build Tool:** Vite
- **Styling:** TailwindCSS

#### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **API Style:** REST
- **Database:** PostgreSQL

#### Testing
- **Unit / Integration:** Jest
- **End-to-End:** Playwright

#### Code Quality
- **Linting:** ESLint
- **Formatting:** Prettier

#### Hosting
- **Frontend:** Vercel
- **Backend & Services:** Fly.io

---

## DevOps & Process

- **Version Control:** Git (GitHub)
- **Project Management:** GitHub Issues, Milestones, Projects (Agile/Scrum)
- **CI/CD:** GitHub Actions
- **Containerization:** Docker
- **Documentation:** README files and `/docs`

---

## Repository Structure

```txt
withyou/
├── api/        # Backend (Node.js, Express, PostgreSQL)
├── web/        # Frontend (React, Vite, TailwindCSS)
├── shared/     # Shared types and contracts
├── .github/    # CI/CD workflows
└── docs/       # Project documentation
