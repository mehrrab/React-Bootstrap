import NavbarHeader from "./components/header/NavbarHeader"
import Main from "./components/main/Main"
import Students from "./components/students/Students"
import Team2 from "./components/team2/Team2"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import {} from "./helpers/colors"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Helmet , HelmetProvider } from "react-helmet-async"

const App =()=>{
  return(
    <>
    <HelmetProvider>
      <div >
        {/* <Main/> */}
      {/* style={{backgroundColor:"#282A36"}} */}
      <Helmet>
      <title>The Night Studio</title>

      </Helmet>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavbarHeader/>}>
              <Route index element={<Main />} />
              <Route path="about" element={<About/>} />
              <Route path="contact" element={<Contact/>} />
              <Route path="services" element={<Services/>} />
              <Route path="team2" element={<Students/>} />

            </Route>
          </Routes>
        </BrowserRouter>





        
        {/* <Team2/> */}
        {/* <NavbarHeader /> */}
        {/* <Students/> */}
        {/* <Team/> */}
        <Footer/>
      </div>
      </HelmetProvider>
    </>
  )
}
export default App