import { useEffect } from 'react'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  const page = window.location.pathname.replace(/\/$/, '')
  const isAbout = page === '/sobre'
  useEffect(() => {
    document.title = isAbout ? 'Sobre nós — Novara Vistos' : 'Novara Vistos — Seu mundo, sem fronteiras'
  }, [isAbout])
  return <MainLayout mainClassName={isAbout ? 'about-page-main' : 'home-page-main'}>{isAbout ? <About /> : <Home />}</MainLayout>
}
