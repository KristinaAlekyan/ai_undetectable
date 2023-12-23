import { useState } from "react";
import MobileMenu from "./components/MobileMenu";
import Layout from "./pages";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="bg-bgColor flex flex-col ">
      <Layout open={open} setOpen={setOpen}/>
      <MobileMenu open={open} setOpen={setOpen}/>
    </div>
  )
}

export default App;