import { useEffect } from "react"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import BackgroundElements from "./components/background/BackgroundElements"
import useScrollPosition from "./hooks/useScrollPosition"
import { themeChange } from "theme-change"
import About from "./components/about/About"
import Certificates from "./components/certificates/Certificates"
import Educations from "./components/eductations/Educations"
import Footer from "./components/footer/Footer"
import Experiences from "./components/experiences/Experiences"
function App() {
  const scrollY = useScrollPosition();

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <>
      <BackgroundElements scrollY={scrollY} />
      <Header />
      <div className="container mx-auto">
        <Home/>
        <About/>
        <Experiences/>
        <Educations/>
        <Certificates/>
      </div>
      <Footer/>
    </>
  )
}

export default App
