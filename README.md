Assignment-0
1. Project description

My React Blog is a simple blog platform built with React and Vite. This project demonstrates the creation of a basic React component, a styled header with navigation, and foundational app setup using Vite. It provides a simple starting point for a blog, showcasing structured components and organized styling, making it an ideal foundation for building out further features in a React-based application.


2. Setup Instructions
1. Check Your Development Environment
First, ensure you have the necessary tools installed. Open your terminal and run:

node --version  # Should be 14.0.0 or higher
npm --version   # Should be 6.0.0 or higher
2. Create Your Project
# Create a new project
npm create vite@latest my-blog -- --template react

# Navigate to project folder
cd my-blog

# Install dependencies
npm install

# Start development server
npm run dev
3. Understanding Project Structure
Your project will have this structure:

my-blog/
├── node_modules/     # Dependencies (don't modify)
├── public/          # Static files
├── src/             # Your source code
│   ├── App.jsx      # Main application component
│   ├── main.jsx     # Application entry point
│   └── index.css    # Global styles
├── package.json     # Project configuration
└── vite.config.js   # Vite configuration

Clone the repository: Open a terminal and run:

git clone [https://github.com/HemanthRam028/My_Blog.git]
Navigate to the project folder:

cd react-blog
Install dependencies:

npm install
Run the development server:

npm run dev


4. Screenshot of Running Application
## Screenshot
![Screenshot of My React Blog](screenshot.png)
![Screenshot of My React Blog](screenshot1.png)


5. What I Learned
1. Creating a simple React component structure.
2. Styling components using CSS.
3. Setting up and using Git and GitHub for version control.

6. we implemented the dark mode.Add header.css to compouents


Assignment-1
# My React Blog

A blog platform built with React and Vite.

## Setup Instructions
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open http://localhost:5173 in your browser

## Components Structure
- **BlogPost**: Individual blog post display.
- **BlogList**: Container for multiple posts.
- **Header**: Navigation and site title with dark mode toggle.

## Styling Approach
I used CSS Modules for individual component styling and also employed CSS custom properties (variables) for a flexible theme system. Media queries are added for responsive design.

## New Features
- Responsive layout for mobile devices.
- Smooth transitions for hover effects.
- Improved accessibility with better contrast ratios.

## Screenshots
### Desktop View:
![Desktop View](screenshot2.png)

### Mobile View:
![Mobile View](screenshot3.png)

Challenges Faced:
Challenge 1: Implementing persistent dark mode across page reloads.
Solution: I used the localStorage API to store the user's theme preference. The theme is retrieved on the initial page load and applied using the data-theme attribute, ensuring the theme persists across sessions.

Challenge 2: Ensuring that the dark mode toggle works seamlessly with the blog layout.
Solution: I added a class to the body element to control the theme. The theme is toggled based on the button click, and I applied conditional styles for dark and light modes using CSS custom properties.
