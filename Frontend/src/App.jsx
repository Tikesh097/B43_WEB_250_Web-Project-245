import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
//import ReportPage from './pages/ReportPage';
//import DashboardPage from './pages/DashboardPage';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
      </Router>

  )
}

export default App
