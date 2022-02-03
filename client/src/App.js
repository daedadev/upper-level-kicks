import MainPage from "./pages/MainPage";
import ShoePage from "./pages/ShoePage";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SearchResultPage from "./pages/ResultPage";
import { UserContextProvider } from "./context/UserContext";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/result/:shoe" element={<ShoePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search/" element={<SearchResultPage />} />
        </Routes>
        <Footer />
      </Router>
    </UserContextProvider>
  );
}

export default App;
