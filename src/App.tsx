import Contact from "./Contact";
import Demo from "./Demo";
import Features from "./Features";
import Footer from "./Footer";
import Intro from "./Intro";
import { Toaster } from "sonner"
import Navbar from "./Navbar";


function App() {

  console.log("Version 1.1.3")

  return (
    <>
      <Navbar/>
      <div className="h-[800px]">
        <Intro />
      </div>
      <Features/>
      <Demo/>
      <Contact/>
      <Footer/>
      <Toaster richColors position="top-center" />
    </>
  )
}

export default App