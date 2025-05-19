# Construction Project Management App

A full-stack web application for managing construction company content, including services, projects, articles, and testimonials.
The app features a modern React frontend and a Laravel backend, 
providing both public-facing pages and a secure admin dashboard.

## Features

### Public Website

- **Home Page**:  
  - Animated hero section with call-to-action.
  - "About Us" summary and company highlights.
  - Dynamic sections for latest services, projects, and blog articles.
  - "Why Choose Us" section with animated cards.
  - Testimonials carousel.

- **About Page**:  
  - Company mission and vision.
  - Animated team member cards with images and social links.

- **Services Page**:  
  - List of all services with images, descriptions, and "Read More" links.
  - Individual service detail pages with full content.

- **Projects Page**:  
  - Grid of all projects with images, type, and location.
  - Individual project detail pages with content, construction type, sector, and location.

- **Blog Page**:  
  - List of articles with images, titles, and "Read More" links.
  - Article detail pages (if implemented).

- **Contact Us Page**:  
  - Contact form for inquiries.
  - Company contact information.

---

### Admin Dashboard

- **Authentication**:  
  - Secure login for admins using JWT tokens.
  - Protected admin routes using React context and route guards.

- **Dashboard Home**:  
  - Overview panel after login.

- **Services Management**:  
  - Create, edit, delete, and list services.
  - Rich text editor for service content.
  - Image upload with preview.
  - Status toggle (active/block).

- **Projects Management**:  
  - Create, edit, delete, and list projects.
  - Fields for title, slug, location, construction type, sector, description, and image.
  - Rich text editor for project content.
  - Status toggle.

- **Articles Management**:  
  - Create, edit, delete, and list articles.
  - Fields for title, slug, author, short description, content, image, and status.
  - Rich text editor for article content.

- **Testimonials Management**:  
  - Create, edit, delete, and list testimonials.
  - Fields for testimonial text, citation, designation, image, and status.

- **Image Uploads**:  
  - Temporary image upload endpoint for all content types.
  - Image previews in forms.

- **Notifications**:  
  - Toast notifications for all CRUD operations and errors.

- **Responsive Design**:  
  - Fully responsive admin and public UI using Bootstrap.

- **Animations**:  
  - Smooth scroll and element animations using AOS.

---

## Tech Stack

- **Frontend**:  
  - React (with Hooks, Context API)
  - Vite (build tool)
  - Bootstrap 5
  - React Router
  - Jodit Editor (rich text)
  - React Hook Form (form validation)
  - React Toastify (notifications)
  - AOS (animations)

- **Backend**:  
  - Laravel (REST API)
  - Eloquent ORM
  - JWT Authentication
  - File upload handling
  - Database migrations

---

## Project Structure

```
client/
  src/
    components/
      backend/      # Admin dashboard components
      common/       # Shared UI components (Header, Footer, etc.)
    pages/          # Public-facing pages
    assets/         # Images, styles
  public/
  package.json
  vite.config.js

server/
  app/
  routes/
  database/
  public/
  composer.json
  .env
```

---

## Setup & Installation

### Prerequisites

- Node.js & npm
- PHP & Composer
- MySQL/SQLite

### Steps

1. **Clone the repository**
   ```sh
   git clone <repo-url>
   cd construction
   ```

2. **Install dependencies**

   - **Frontend**
     ```sh
     cd client
     npm install
     ```

   - **Backend**
     ```sh
     cd ../server
     composer install
     npm install
     cp .env.example .env
     php artisan key:generate
     ```

3. **Configure Environment**
   - Edit `server/.env` for DB and mail settings.

4. **Run Migrations**
   ```sh
   php artisan migrate
   ```

5. **Start Development Servers**

   - **Frontend**
     ```sh
     cd client
     npm run dev
     ```

   - **Backend**
     ```sh
     cd server
     php artisan serve
     ```

---

## Core Functionality

- **Dynamic Content**: All services, projects, articles, and testimonials are managed via the admin dashboard and displayed dynamically on the public site.
- **CRUD Operations**: Full create, read, update, and delete support for all major content types.
- **Image Handling**: Upload and preview images for all content types.
- **Authentication**: Secure admin area with JWT-based login and protected routes.
- **Form Validation**: Robust client-side validation using React Hook Form.
- **Notifications**: User feedback for all actions via toast notifications.
- **Rich Text Editing**: Jodit Editor for content fields.
- **Responsive & Animated UI**: Modern, mobile-friendly design with smooth animations.

---

## API Overview

- **Services**:  
  - `GET /api/services`  
  - `POST /api/services`  
  - `PUT /api/services/{id}`  
  - `DELETE /api/services/{id}`

- **Projects**:  
  - `GET /api/projects`  
  - `POST /api/projects`  
  - `PUT /api/projects/{id}`  
  - `DELETE /api/projects/{id}`

- **Articles**:  
  - `GET /api/articles`  
  - `POST /api/articles`  
  - `PUT /api/articles/{id}`  
  - `DELETE /api/articles/{id}`

- **Testimonials**:  
  - `GET /api/testimonals`  
  - `POST /api/testimonals`  
  - `PUT /api/testimonals/{id}`  
  - `DELETE /api/testimonals/{id}`

- **Image Upload**:  
  - `POST /api/temp-images`

- **Authentication**:  
  - `POST /api/authenticate` (returns JWT token)

---

## Authentication & Security

- **JWT Authentication**:  
  - Admin login issues a JWT token, stored in localStorage.
  - All admin API requests require `Authorization: Bearer <token>` header.
  - React Context manages user state and route protection.

- **Protected Routes**:  
  - Admin dashboard and CRUD pages are only accessible to authenticated users.

---

## Testing

- **Backend**:  
  - Run PHPUnit tests:
    ```sh
    cd server
    phpunit
    ```

- **Frontend**:  
  - Add tests as needed using your preferred React testing library.

---

## License

This project is licensed under the MIT License.

---
