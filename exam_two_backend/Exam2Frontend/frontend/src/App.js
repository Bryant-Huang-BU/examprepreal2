import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add_Student from "./pages/Add_Student";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home />}></Route>
                <Route path="/Add_Student" element={<Add_Student />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
