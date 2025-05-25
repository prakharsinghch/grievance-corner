# Form Email Web Application

A web application that allows users to submit a contact form and receive email confirmations.

## Features

- Modern React frontend with Material-UI components
- Node.js/Express backend
- Email notifications using Nodemailer
- Form validation
- Responsive design

## Setup Instructions

1. Clone the repository
2. Install backend dependencies:
   ```bash
   cd form-email-app
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

4. Create a `.env` file in the root directory with the following variables:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-specific-password
   PORT=5000
   ```

   Note: For Gmail, you'll need to use an App Password. You can generate one in your Google Account settings under Security > 2-Step Verification > App passwords.

5. Start the backend server:
   ```bash
   npm run dev
   ```

6. In a new terminal, start the frontend:
   ```bash
   cd client
   npm start
   ```

The application will be available at `http://localhost:3000`

## Usage

1. Fill out the contact form with your name, email, and message
2. Submit the form
3. You will receive an email confirmation with your submitted information
4. A success message will appear on the screen

## Technologies Used

- React
- Material-UI
- Node.js
- Express
- Nodemailer
- Axios 