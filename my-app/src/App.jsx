import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from "./components/pages/main/Main";
import "./styles/App.css";
import { themes, ThemeContext } from "./components/theme/themeContext";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todos from "./components/pages/todos/Todos";
import NotFound from "./components/NotFount/NotFound";
import LoginForm from "./components/pages/form/LoginForm";
import Modal from "./components/pages/modal/Modal";
import Post from "./components/pages/post/Post";
import Shop from "./components/pages/shop/Shop";


const App = () => {
  const [theme, setTheme] = useState(themes.orange);

  useEffect(() => {
    document.documentElement.style.setProperty("--bg", theme.background);
    document.documentElement.style.setProperty("--color", theme.color);
    document.documentElement.style.setProperty("--color-title", theme.title);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <div className="contant">
          <Header />
          <main className="main-contant">
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Main />} />
              <Route path="/todos" element={<Todos />} />
              <Route path="/form" element={<LoginForm />} />
              <Route path="/modal" element={<Modal />} />
              <Route path="/post" element={<Post />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
