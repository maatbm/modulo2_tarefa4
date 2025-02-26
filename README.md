# Task Management Application with React and TypeScript

A modern task management application built with React and TypeScript that allows users to create, track, and manage their tasks with a clean and intuitive interface. The application provides a seamless experience for organizing daily tasks with features like task creation, completion tracking, and task deletion.

This application leverages React's context API for state management and React Router for navigation between views. Built with Vite and TypeScript, it offers a robust development environment with type safety and modern build tooling. The application features a responsive design with a user-friendly interface that allows users to manage their tasks efficiently through a simple yet powerful task management system.

## Repository Structure
```
.
├── src/                          # Source code directory
│   ├── components/               # Reusable UI components
│   │   ├── footer/              # Footer component and styles
│   │   └── task/               # Task component for displaying individual tasks
│   ├── contexts/                # React context definitions
│   │   └── TaskContext.tsx      # Task management context provider
│   ├── pages/                   # Application pages
│   │   ├── createNewTask/       # New task creation page
│   │   └── home/               # Home page with task listing
│   ├── routes/                  # Routing configuration
│   │   └── AppRoutes.tsx       # Application route definitions
│   ├── App.tsx                 # Root application component
│   └── main.tsx                # Application entry point
├── vite.config.ts              # Vite build configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies and scripts
```

## Usage Instructions
### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Modern web browser

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd task-management-app

# Install dependencies
npm install

# Start development server
npm run dev
```

### Quick Start
1. Launch the application by running `npm run dev`
2. Navigate to the displayed local URL (typically http://localhost:5173)
3. Click "Criar uma tarefa" to create a new task
4. Fill in the task details:
   - Title
   - Description
   - Due date
5. Submit the form to create the task
6. View and manage tasks on the home page

### More Detailed Examples
#### Creating a Task
```typescript
// Example task creation
const task = {
  title: "Complete Project Documentation",
  description: "Write comprehensive documentation for the project",
  date: "2024-03-20",
  completed: false
};
```

#### Managing Tasks
- Mark tasks as complete by clicking the checkbox
- Delete tasks using the delete button
- View all tasks on the home page

### Troubleshooting
#### Common Issues
1. **Build Failures**
   - Error: `TypeError: Cannot find module 'react'`
   - Solution: Run `npm install` to ensure all dependencies are installed

2. **TypeScript Errors**
   - Error: `TS2307: Cannot find module or its corresponding type declarations`
   - Solution: Run `npm install --save-dev @types/react @types/react-dom`

#### Debugging
- Enable React Developer Tools in your browser
- Check the console for error messages
- Verify that all required environment variables are set

## Data Flow
The application follows a unidirectional data flow pattern using React Context for state management.

```ascii
+----------------+     +-----------------+     +------------------+
|   TaskContext  |     |  Task Actions   |     |   Components    |
|  (State Store) | --> | (Add/Delete/    | --> |  (UI Updates)   |
|                |     |  Toggle Tasks)   |     |                |
+----------------+     +-----------------+     +------------------+
        ^                                            |
        |                                           |
        +-------------------------------------------+
                    State Updates
```

Component Interactions:
1. TaskContext provides the global task state to all components
2. Home component displays the list of tasks from context
3. CreateNewTask component adds new tasks to the context
4. Task component handles individual task updates and deletion
5. All state changes trigger UI updates through React's rendering cycle
6. Context updates are propagated to all subscribed components
7. Router handles navigation between views while maintaining state