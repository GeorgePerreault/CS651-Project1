import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/sign-in-page";
import AboutPage from "./Pages/About";   // Import the About page
import ContactPage from "./Pages/Contact"; // Import the Contact page

function App() {
  return (
    <div>
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<SignInPage />} />
          <Route path="/home" element={<HomePage />} />
=======
          <Route path="/sign-in-page" element={<SignInPage />} />
          <Route path="/" element={<HomePage />} />
>>>>>>> d80d2f6 (Initial commit)
          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
