import { Route, Routes } from "react-router-dom";
import Slider from "./Slider/Slider";
import Landing from "./Landing";
import Navbar from "./Navbar";

const AppRouter = () => {

    return (
        <>
        <Navbar/>
        <Routes>
            <Route element={<Landing/>} path="/"/>
            <Route element={<Slider/>} path="/slider"/>
        </Routes>
        
        </>
        
    );
};

export default AppRouter;