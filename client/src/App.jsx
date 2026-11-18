
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import Learn from "./pages/Learn";
import { ThemeProvider } from "./context/ThemeContext";
import Login from "./pages/Login";
import Register from "./pages/Register";



function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />                               
        <Route path="/courses/:id" element={<CourseDetails />} />   
        <Route path="/learn/:id" element={<Learn />} />             
        <Route path="/courses/:id/learn" element={<Learn />} />     
        <Route path="/login" element={<Login />} />                     
        <Route path="/register" element={<Register />} />           
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
