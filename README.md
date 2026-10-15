# 🌱 Smart Agriculture Marketplace

A full-stack agricultural marketplace that connects farmers, buyers, and agricultural experts through a modern, secure, and user-friendly web application.


## 📌 Project Overview

Smart Agriculture Marketplace is a full-stack web application designed to simplify agricultural trading by connecting farmers directly with buyers and providing access to agricultural experts.
The platform includes product management, farmer and buyer management, secure authentication, category management, consultations, and administrative dashboards.

## ✨ Major Features

- **Farmer and Buyer Management** — Manage user accounts and role-specific activities.
- **Agricultural Product Marketplace** — Browse, publish, and manage agricultural products.
- **Product Management** — Create, update, search, filter, and manage product listings.
- **Category Management** — Organize agricultural products by category.
- **Role-Based Authentication** — Support Farmers, Buyers, Experts, Admins, and Super Admins.
- **Expert Management** — Manage agricultural experts and consultation features.
- **Admin Dashboard** — Manage users, products, categories, and marketplace activities.
- **REST API Integration** — Connect frontend functionality with backend services.
- **Database Management** — Manage relational data using PostgreSQL and Prisma ORM.
- **Form Validation** — Validate user input using React Hook Form and Zod.
- **Responsive UI** — Support desktop, tablet, and mobile devices.
- **Error Handling** — Provide structured validation and error handling.

## 🛠️ Technology Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React
- React Hook Form
- Zod
- Recharts

### Backend
- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Zod Validation

### Tools and Deployment
- Git
- GitHub
- Visual Studio Code
- Vercel

## 🔗 Project Links

| Resource | Link |
|---|---|
| Live Demo | [View Application](https://smart-agriculture-marketplace-nine.vercel.app/) |
| Frontend Repository | [Frontend GitHub](https://github.com/Mahabub-Alom-Sujon/Smart-Agriculture-Marketplace-Frontend) |
| Backend Repository | [Backend GitHub](https://github.com/Mahabub-Alom-Sujon/Smart-Agriculture-Marketplace-Backend) |

## 🚀 Getting Started

Follow these steps to run the frontend application locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git
- PostgreSQL (for local backend development)

### 1. Clone the Frontend Repository

```bash
git clone https://github.com/Mahabub-Alom-Sujon/Smart-Agriculture-Marketplace-Frontend.git

cd Smart-Agriculture-Marketplace-Frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory.

```env
NEXT_PUBLIC_API_URL=https://smart-agriculture-marketplace-backe.vercel.app/api/v1
```

Replace the URL with your deployed backend API URL when using the hosted backend.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Backend Setup

Clone the backend repository separately.

```bash
git clone https://github.com/Mahabub-Alom-Sujon/Smart-Agriculture-Marketplace-Backend.git

cd Smart-Agriculture-Marketplace-Backend

npm install
```

Configure the required environment variables in your backend `.env` file.

Example:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/agromart"
JWT_SECRET="your_jwt_secret"
```

Generate the Prisma Client and run database migrations.

```bash
npx prisma generate
npx prisma migrate dev
npm run dev
```

**Note:** Use the environment variable names and scripts defined in your backend project. Never commit secrets or database credentials to GitHub.

## 👥 User Roles

The application supports the following roles:

- **Buyer** — Browse agricultural products and access marketplace features.
- **Farmer** — Manage agricultural products and farming-related activities.
- **Expert** — Support agricultural consultation services.
- **Admin** — Manage users, products, categories, and platform activities.
- **Super Admin** — Access higher-level administrative features.

## 🔐 Security and Validation

- JWT-based authentication.
- Role-based authorization.
- Protected routes and operations.
- Zod-based input validation.
- Structured API error handling.
- Secure environment variable configuration.


## 📁 Project Structure

```text
Smart-Agriculture-Marketplace-Frontend/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── ...
│
├── src/
│   │
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   ├── forgot-password/
│   │   │   │   └── page.tsx
│   │   │   └── reset-password/
│   │   │       └── page.tsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── admin/
│   │   │   │   ├── users/
│   │   │   │   ├── farmers/
│   │   │   │   ├── buyers/
│   │   │   │   ├── experts/
│   │   │   │   ├── products/
│   │   │   │   ├── categories/
│   │   │   │   ├── orders/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── farmer/
│   │   │   │   ├── products/
│   │   │   │   ├── farms/
│   │   │   │   ├── crops/
│   │   │   │   ├── consultations/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── buyer/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── expert/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   └── super-admin/
│   │   │       └── page.tsx
│   │   │
│   │   ├── products/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── categories/
│   │   │   └── page.tsx
│   │   │
│   │   ├── cart/
│   │   │   └── page.tsx
│   │   │
│   │   ├── wishlist/
│   │   │   └── page.tsx
│   │   │
│   │   ├── checkout/
│   │   │   └── page.tsx
│   │   │
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   │
│   │   ├── _components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   │
│   │   ├── _actions/
│   │   │   └── ...
│   │   │
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── shared/
│   │   ├── forms/
│   │   ├── dashboard/
│   │   └── layout/
│   │
│   ├── hooks/
│   │   └── ...
│   │
│   ├── lib/
│   │   ├── utils.ts
│   │   └── ...
│   │
│   ├── types/
│   │   ├── types.user.ts
│   │   ├── types.product.ts
│   │   ├── types.category.ts
│   │   ├── types.farmer.ts
│   │   ├── types.consultation.ts
│   │   └── ...
│   │
│   ├── providers/
│   │   └── ...
│   │
│   └── middleware.ts
│
├── .env.local
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

### 📂 Directory Description

| Directory | Description |
|---|---|
| `src/app/` | Application routes, layouts, pages, and server actions |
| `src/app/dashboard/` | Role-based dashboards for users and administrators |
| `src/app/_components/` | Components shared within the App Router |
| `src/app/_actions/` | Server actions for application operations |
| `src/components/` | Reusable UI components and forms |
| `src/components/ui/` | Reusable interface components |
| `src/hooks/` | Custom React hooks |
| `src/lib/` | Utility functions and shared libraries |
| `src/types/` | TypeScript interfaces and type definitions |
| `src/providers/` | React context providers |
| `public/` | Static images, icons, and other public assets |

### 🔧 Environment Variables

Create a `.env.local` file in the project root and configure the required environment variables.

```env
NEXT_PUBLIC_API_URL=your_backend_api_url
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
```

**Security:** Never commit `.env.local` or expose JWT secrets, database credentials, or other private keys in your public repository.

> **Note:** This is a suggested project structure based on the application's features, not a verified listing of every file in your actual repository. Update the tree to match your real folders and filenames before publishing it.

## 🔑 Test Credentials

Use the following credentials to test the application's different user roles.

### 👨‍💼 Admin

| Field | Value |
|---|---|
| **Email** | `testeradmin@gmail.com` |
| **Password** | `Tester@admin12345` |

### 👤 Farmer

#### Farmer 1
| Field | Value |
|---|---|
| **Email** | `test@gmail.com` |
| **Password** | `Password@123` |

#### Farmer 2
| Field | Value |
|---|---|
| **Email** | `rafit@gmail.com` |
| **Password** | `Password@123` |

### 👨‍💼 Expert

| Field | Value |
|---|---|
| **Email** | `rahman@example.com` |
| **Password** | `Password@123` |

## 🎯 Project Goals

- Digitize agricultural product trading.
- Connect farmers directly with potential buyers.
- Improve access to agricultural expertise.
- Simplify agricultural product management.
- Provide secure, efficient marketplace operations.
- Deliver a responsive and user-friendly experience.

## 👨‍💻 Developer

**Mahabub Alom Sujon**

Frontend Developer | Full-Stack Web Developer

- GitHub: [Mahabub-Alom-Sujon](https://github.com/Mahabub-Alom-Sujon)
- LinkedIn: [Mahabub Alom Sujon](https://www.linkedin.com/in/mahabub-alom-sujon/)
- Portfolio: [Personal Portfolio](https://mahabub-portfolio.vercel.app/)

## 📄 License

No open-source license has been specified yet. Add a `LICENSE` file if you want to distribute the project under a particular open-source license.

---

<p align="center">
  Built with ❤️ by Mahabub Alom Sujon
</p>
