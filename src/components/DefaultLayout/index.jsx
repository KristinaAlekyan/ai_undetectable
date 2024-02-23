import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import About from "../../pages/About";
import Signin from "../../pages/Signin";
import Signup from "../../pages/Signup";
import Profile from "../../pages/Profile";
import NotFound from "../../pages/NotFound";

import AiUndetectable from "../../pages/AiUndetectable";
import Posts from "../../pages/Posts";
import Pricing from "../../pages/Pricing";
import { getUserStorage } from "../../helpers";
import Layout from "../../pages";

export const ProtectedRoute = ({ children }) => {
  if (getUserStorage()) {
    return children
  }
  else {
    return <Navigate to={'/login'} replace />
  }
}

const DefaultLayout = () => {
  return (
    <div className="grow">
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>}
          />
          <Route path="/ai-undetectable" element={<AiUndetectable />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/posts/:postId" element={<Posts />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default DefaultLayout;