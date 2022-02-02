import MainPage from "./pages/MainPage";
import ShoePage from "./pages/ShoePage";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SearchResultPage from "./pages/ResultPage";
import { ShoeContextProvider } from "./context/ShoeContext";
import { UserContextProvider } from "./context/UserContext";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <UserContextProvider>
      <ShoeContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} key={location.href} />
            <Route path="/result/" element={<ShoePage />} key={location.href} />
            <Route path="/login" element={<LoginPage />} key={location.href} />
            <Route
              path="/search/"
              element={<SearchResultPage />}
              key={location.href}
            />
          </Routes>
          <Footer />
        </Router>
      </ShoeContextProvider>
    </UserContextProvider>
  );
}

export default App;
