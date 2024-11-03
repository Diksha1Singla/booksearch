import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import BookList from './components/BookList/BookList';
import BookDetails from "./components/BookDetails/BookDetails";
import Navbar from './components/Navbar/Navbar';
import Register from "./components/Register/register"
import Login from "./components/Login/Login"
import Logout from "./components/Logout/Logout"

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/book" element={<BookList />} />
        <Route exact path="/book/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;