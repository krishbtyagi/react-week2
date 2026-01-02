import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"

function App() {
  return <div>
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Layout/>} />
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  </div>
}

function Layout() {
  return <div style={{height: "100vh"}}>
      <Link to ="/">Allen </Link>
      <Link to ="/neet/online-coaching-class-11">class11 </Link>
      <Link to ="/neet/online-coaching-class-12">class12 </Link>
      <div style={{height: "90vh"}}>
        <Outlet />
      </div>
    footer
  </div>
}

function Landing() {
  return <div>
    welcome to allen
  </div>
}

function Class11Program() {
  return <div>
    hi class11
  </div>
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser(){
    navigate("/")
  }
  return <div>
    hi class12
    <button onClick={redirectUser}>go back to landing page</button>
  </div>
}

function ErrorPage(){ 
  return <div>
    sorry, page not found
  </div>
}
export default App
