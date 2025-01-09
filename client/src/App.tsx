import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashBoard } from './pages/dashboard';
import { Auth } from './pages/auth';

function App() {

  return (
    <>
      <Router>
        <div className='app-container'>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route  path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
