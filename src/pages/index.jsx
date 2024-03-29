import Header from "../components/Header";
import Footer from "../components/Footer"
import GetStarted from "../components/GetStarted";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div >
      <Header />
      <main>
        <GetStarted />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
