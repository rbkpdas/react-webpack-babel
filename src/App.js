import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Services'
import WebDesign from './Pages/WebDesign'
import WebDev from './Pages/WebDev'
import Frontend from './Pages/Frontend'
import Node from './Pages/Node'
import OurValues from './Pages/OurValues'
import PHP from './Pages/PHP'
import SEO from './Pages/SEO'
import AboutWho from './Pages/AboutWho'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/web-dev" element={<WebDev />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/node" element={<Node />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/php" element={<PHP />} />
          <Route path="/who-we-are" element={<AboutWho />} />
          <Route path="/our-values" element={<OurValues />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
    /*
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>*/
  )
}

export default App
