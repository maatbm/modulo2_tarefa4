import { AppRoutes } from './routes/AppRoutes';
import { TaskProvider } from './contexts/TaskContext';

function App() {
  return (
    <TaskProvider>
      <AppRoutes/>
    </TaskProvider>
  )
}

export default App;
