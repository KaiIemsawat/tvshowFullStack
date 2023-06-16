import axios from "axios";
import { useEffect, useState } from "react";
import Display from "./components/Display";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreateShow from "./components/CreateShow";
import OneShow from "./components/OneShow";
import EditShow from "./components/EditShow";

function App() {
    const [showList, setShowList] = useState([]);

    return (
        <>
            <BrowserRouter>
                <h1>Welcome to the TV Show App</h1>
                <Link to={"/createShow/form"}>Add your show</Link>
                <br/>
                <Link to={"/"}>Home</Link>
                <Routes>
                    {/* Paths need to match to the paths from components (in this case in Display.jsx) (port 3000) */}
                    <Route path="/" element={<Display showList={showList} setShowList={setShowList}/>}/>
                    <Route path="/createShow/form" element={<CreateShow/>}/>
                    <Route path="/viewShow/:id" element={<OneShow/>}/>
                    <Route path="/editShow/:id" element={<EditShow/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
