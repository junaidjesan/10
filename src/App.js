import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { webrouter } from './Router/Rout';

function App() {
  return (
    <div>
      <RouterProvider router={webrouter}>
        
      </RouterProvider>
    </div>
  );
}

export default App;
