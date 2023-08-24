import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./screen/home/Home";
import Search from "./screen/home/Search";
import More from "./screen/home/More";
import Chatting from "./screen/home/Chatting";
import Add from "./screen/home/Add";

function Routers () {
    return (
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/search" element={<Search />} />
                <Route path="/add" element={<Add />} />
                <Route path="/chatting" element={<Chatting />} />
                <Route path="/more" element={<More />} />
            </Routes>
    );
}

export default Routers;