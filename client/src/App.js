import MainPage from "./pages/MainPage";
import ShoePage from "./pages/ShoePage";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/result" element={<ShoePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
