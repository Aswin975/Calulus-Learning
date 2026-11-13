
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import Learn from "./pages/Learn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/learn/:id" element={<Learn />} />
        <Route path="/courses/:id/learn" element={<Learn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
