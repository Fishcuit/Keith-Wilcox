import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Piqum from "./pages/Piqum";

const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/piqum" element={<Piqum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
