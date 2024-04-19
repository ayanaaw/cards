import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "../src/pages/MainPage";

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default Routers;