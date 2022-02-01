import MainPage from "./pages/MainPage";
import ShoePage from "./pages/ShoePage";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SearchResultPage from "./pages/ResultPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} key={location.href} />
        <Route path="/result/" element={<ShoePage />} key={location.href} />
        <Route
          path="/search/"
          element={<SearchResultPage />}
          key={location.href}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
