import axios from "axios";
import { useEffect, useState } from "react";
import Display from "./components/Display";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreateShow from "./components/CreateShow";
import OneShow from "./components/OneShow";

function App() {
    const [showList, setShowList] = useState([]);

    return (
        <>
            <BrowserRouter>
            {/* Links in this page (in this project) refer to port 3000 */}
                <h1>Welcome to the TV Show App</h1>
                <Link to={"/createShow/form"}>Add your show</Link>
                <br/>
                <Link to={"/"}>Home</Link>
                <Routes>
                    <Route path="/" element={<Display showList={showList} setShowList={setShowList}/>}/>
                    <Route path="/createShow/form" element={<CreateShow/>}/>
                    <Route path="/viewShow/:id" element={<OneShow/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
