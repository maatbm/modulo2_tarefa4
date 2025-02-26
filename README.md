# Task Management Application with React and TypeScript

A modern web application for managing tasks with an intuitive interface. This application allows users to create, track, and manage tasks with features like task completion status tracking and due date management.

The application is built using React and TypeScript, providing a type-safe and maintainable codebase. It uses Vite as the build tool for fast development and optimized production builds. The application features a clean and responsive user interface with a task list view and a dedicated task creation form. Tasks are managed through React Context, providing seamless state management across components.

## Repository Structure
```
.
├── src/                          # Source code directory
│   ├── components/              # Reusable UI components
│   │   ├── footer/             # Footer component and styles
│   │   └── task/              # Task component for displaying individual tasks
│   ├── contexts/               # React context definitions
│   │   └── TaskContext.tsx    # Task management context provider
│   ├── pages/                 # Application pages
│   │   ├── createNewTask/     # New task creation page
│   │   └── home/             # Home page with task list
│   ├── routes/                # Application routing configuration
│   │   └── AppRoutes.tsx     # Route definitions
│   ├── App.tsx               # Root application component
│   └── main.tsx             # Application entry point
├── vite.config.ts           # Vite build configuration
├── tsconfig.json           # TypeScript configuration
└── package.json           # Project dependencies and scripts
```

## Usage Instructions
### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd <project-directory>

# Install dependencies
npm install
```

### Quick Start
1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`

3. Create a new task:
   - Click the "Criar uma tarefa" button
   - Fill in the task details (title, description, and due date)
   - Submit the form

### More Detailed Examples

#### Creating a Task
```typescript
// Example task creation
const task = {
  title: "Complete Project Documentation",
  description: "Write comprehensive documentation for the project",
  date: "2024-03-01",
  completed: false
};
```

#### Managing Tasks
```typescript
// Toggle task completion
const task = tasks.find(t => t.id === taskId);
task.completed = !task.completed;

// Delete a task
const updatedTasks = tasks.filter(t => t.id !== taskId);
```

### Troubleshooting

#### Common Issues

1. **Task Creation Form Not Submitting**
   - Ensure all required fields are filled
   - Check browser console for any JavaScript errors
   - Verify that the date selected is valid

2. **Tasks Not Persisting**
   - The application uses React Context for state management
   - State is not persisted across page refreshes
   - Consider implementing local storage if persistence is needed

#### Development Mode
To enable development mode with detailed logging:
```bash
# Start in development mode
npm run dev

# Enable React Developer Tools in your browser
# Check the React tab in browser developer tools
```

## Data Flow
The application follows a unidirectional data flow pattern where task data is managed through React Context and passed down to components.

```ascii
[TaskContext Provider]
        ↓
    [App Routes]
    ↙         ↘
[Home]     [CreateNewTask]
   ↓
[Task Components]
```

Component Interactions:
1. TaskContext provides task management functions and state to all components
2. Home component displays the list of tasks and handles task filtering
3. CreateNewTask component handles task creation and form submission
4. Task component manages individual task display and actions
5. All components use the TaskContext for state updates
6. Navigation between pages is handled by React Router
7. Task updates trigger re-renders through context updates