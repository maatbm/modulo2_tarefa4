# Task Management Application with React and TypeScript

A modern task management application built with React and TypeScript that enables users to create, track, and manage their tasks with an intuitive interface. The application provides a clean and responsive user experience with features for task creation, completion tracking, and task deletion.

This application leverages React's context API for state management and React Router for navigation between views. It offers a straightforward way to organize tasks with features including task titles, descriptions, due dates, and completion status tracking. The application is built using Vite for optimal development experience and fast builds, with TypeScript for type safety and better developer experience.

## Repository Structure
```
.
├── src/                          # Source code directory
│   ├── main.tsx                 # Application entry point
│   ├── App.tsx                  # Root component with routing setup
│   ├── components/              # Reusable UI components
│   │   └── footer/             # Footer component and styles
│   ├── contexts/               # React context definitions
│   │   └── TaskContext.tsx     # Task management context
│   ├── pages/                  # Application views
│   │   ├── createNewTask/      # New task creation page
│   │   └── home/              # Home page with task list
│   └── routes/                 # Routing configuration
├── vite.config.ts              # Vite build configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Project dependencies and scripts
└── eslint.config.js          # ESLint configuration
```

## Usage Instructions
### Prerequisites
- Node.js (version 14 or higher)
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
```

### Quick Start
1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`

3. Create a new task:
   - Click "Criar uma tarefa" button
   - Fill in the task details
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
const toggleTaskCompleted = (task) => {
  task.completed = !task.completed;
};

// Delete a task
const deleteTask = (taskToDelete) => {
  tasks = tasks.filter(task => task.id !== taskToDelete.id);
};
```

### Troubleshooting

#### Common Issues

1. **Task Creation Form Not Submitting**
   - Ensure all required fields are filled
   - Check browser console for any JavaScript errors
   - Verify that the date selected is valid

2. **Tasks Not Persisting**
   - The application uses in-memory storage
   - Tasks will be reset upon page refresh
   - Consider implementing local storage for persistence

#### Development Mode
To enable development mode with detailed logging:
```bash
# Start in development mode with debugging
npm run dev -- --debug
```

## Data Flow

The application follows a unidirectional data flow pattern using React Context for state management. Tasks are managed through a central TaskContext that handles all task-related operations.

```ascii
[User Interface]
       ↕
[TaskContext Provider]
       ↕
[Task Operations] → [State Updates] → [UI Updates]
```

Component Interactions:
1. User interactions trigger task operations through TaskContext
2. TaskContext manages the task state and provides update methods
3. Components subscribe to TaskContext changes via useContext hook
4. UI automatically updates when task state changes
5. Route changes handled by React Router for navigation
6. Form submissions trigger task creation/updates
7. Delete operations remove tasks from central state