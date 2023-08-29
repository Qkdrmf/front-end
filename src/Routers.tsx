import { Route, Routes } from "react-router-dom";
import Main from "./screen/home/Home";
import Search from "./screen/home/Search";
import More from "./screen/home/More";
import Chatting from "./screen/home/Chatting";
import Add from "./screen/home/Add";
import KakaoLogin from "./screen/login/KakaoLogin";
import KakaoCallback from "./screen/login/KakaoCallback";
import Interest from "./screen/home/Interest";
import FabNav from "./navigation/FabNav";

function Routers () {
    return (
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/search" element={<Search />} />
                <Route path="/interest" element={<Interest />} />
                <Route path="/add" element={<Add />} />
                <Route path="/chatting" element={<Chatting />} />
                <Route path="/more" element={<More />} />
                <Route path="/login/kakao" element={<KakaoLogin />} />
                <Route path="/login/kakao/callback" element={<KakaoCallback />} />
                <Route path="/float" element={<FabNav />} />    
            </Routes>
    );
}

export default Routers;