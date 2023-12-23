import DefaultLayout from "../components/DefaultLayout";
import Header from "../components/Header";
import Footer from "../components/Footer"
import GetStarted from "../components/GetStarted";

const Layout = ({ open, setOpen }) => {  
  
  return (
    <div className={open ? "opacity-50 sm:opacity-100 transition-all" : ""}>
      <Header setOpen={setOpen}/>
      <GetStarted/>
      <DefaultLayout/>
      <Footer/>    
    </div>
  );
}

export default Layout;
