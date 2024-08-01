import './App.css'
import { TasksProvider } from './components/Context/Context'
import { Home } from './components/Pages/Home/Home'
export const App = () => 
    <TasksProvider>
 <Home />
</TasksProvider>

