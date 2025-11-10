# 🕹️ GAME LAB 

## 🌐 Live Game-Lab link
https://jesstopratedgame.netlify.app/


# Description
Dark-Themed Gaming Showcase with Firebase Authentication. Game Lab is a visually striking, dark-themed React application designed to showcase games in a premium card layout. Built with modern frontend tools and Firebase authentication, it offers a secure and immersive experience for users exploring game details

## 🚀 Tech Stack
- Tailwind CSS + DaisyUI** – Utility-first styling with component
- **React** – Component-based architecture
- **React Router DOM** – Client-side routing and protected routes
- **Firebase Auth** – Secure authentication and password reset
- **Custom Hooks** – Dynamic page titles and reusable logic

##  Features

- 🕹️ **Game Cards**: Each game is displayed in a glowing yellow card with hover effects and shadows.

- 🔐 **Protected Routes**: Game detail pages and Profile are private—users must be signed in to access them.

- 📄 **Dynamic Routing**: Clicking a game card navigates to its detail page using React Router.

- 🌑 **Dark + Yellow Theme**: Inspired by gaming dashboards, the UI uses black backgrounds with yellow accents and glowing shadows.

- 🔥 **Firebase Authentication**:
  - Email/password sign-up with email verification and login
  - Google sign-in
  - Password reset with email verification


- 📧 **Newsletter Section**: Users can subscribe for updates in a    glowing, responsive form

- **Dynamic Title** available

## 🔒 Route Protection

Game detail pages are wrapped in a **Private** component. If a user is not authenticated, they are redirected to the login page. This ensures only verified users can access sensitive game data.


#Responsive
 *Responsive Design*  Works smoothly across desktop, tablet, and mobile

#Game Buy
*Game Buy* - Click Buy Now Button in Detail card to view game Package



#Alert For Using Toastify
*Toast Alerts* - Feedback for Login/Loguot actions

#Dynamic Routing
 *Dynamic Routing* - `/details/:id` routes with fallback handling.
