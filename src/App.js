import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import DefaultLayout from "./components/DefaultLayout";

function App() {

  return (
    <>
    <HelmetProvider>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="description" content="A cutting-edge platform dedicated to helping students and professionals seamlessly integrate AI-generated content into their academic and professional project." />
        <title>AI Undetectable | Undetectable AI Writing | Bypass AI Detectors</title>
      </Helmet>
      </HelmetProvider>

      <div className="bg-bgColor flex flex-col ">
        <DefaultLayout/>
      </div>
    </>

  )
}

export default App;