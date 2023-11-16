import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add_Movie from "./pages/Add_Movie";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home />}></Route>
                <Route path="/Add_Movie" element={<Add_Movie />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
