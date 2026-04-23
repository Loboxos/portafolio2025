import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import CaseLosPrimos from './pages/CaseLosPrimos'
import PrivacyPolicy from './pages/PrivacyPolicy'
import './App.css'

const SITE_ORIGIN = 'https://cristianvilla.com'

function CanonicalSync() {
  const { pathname } = useLocation()

  useEffect(() => {
    const normalized =
      pathname === '/' ? '/' : pathname.replace(/\/+$/, '') || '/'
    const href = `${SITE_ORIGIN}${normalized === '/' ? '/' : normalized}`

    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', href)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <CanonicalSync />
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/caso-losprimos2" element={<CaseLosPrimos />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
