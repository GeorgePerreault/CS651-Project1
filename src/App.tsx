import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/sign-in-page";
import AboutPage from "./Pages/About";   
import ContactPage from "./Pages/Contact";
import { ThemeProvider } from "./components/ui/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} /> {/* About route */}
          <Route path="/contact" element={<ContactPage />} /> {/* Contact route */}
        </Routes>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
