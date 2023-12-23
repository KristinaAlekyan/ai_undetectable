import Home from "../../pages/Home";
import About from "../../pages/About";
import Signin from "../../pages/Signin";
import Signup from "../../pages/Signup";
import Profile from "../../pages/Profile";
import AiUndetectable from "../../pages/AiUndetectable";
import Posts from "../../pages/Posts";

import { Route, Routes } from "react-router-dom";
import Pricing from "../../pages/Pricing";


const DefaultLayout = () => {
  return (
    <div className="grow">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/ai-undetectable" element={<AiUndetectable/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/posts/:postId" element={<Posts/>}/>
      </Routes>
    </div>
  );
}

export default DefaultLayout;