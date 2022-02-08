import MainPage from "./pages/MainPage";
import ShoePage from "./pages/ShoePage";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SearchResultPage from "./pages/ResultPage";
import LogSignInPage from "./pages/LogSignInPage";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/result/:shoe" element={<ShoePage />} />
          <Route path="/logsignin" element={<LogSignInPage />} />
          <Route path="/search/:search" element={<SearchResultPage />} />
          <Route path="/dashboard" element={<SearchResultPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
