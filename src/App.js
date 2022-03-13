import HomePage from "./components/homepage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecondPage from "./components/SecondPage/SecondPage";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/second" element={<SecondPage />} />
        </Routes>
      </BrowserRouter>
      ,
    </>
  );
}

export default App;
