import { useEffect } from 'react'
import MainLayout from './components/layout/MainLayout'
import { normalizePath } from './data/site'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  const currentPath = normalizePath(window.location.pathname)
  const isAboutPage = currentPath === '/sobre'

  useEffect(() => {
    document.title = isAboutPage
      ? 'Sobre nós — Novara Vistos'
      : 'Novara Vistos — Seu mundo, sem fronteiras'
  }, [isAboutPage])

  return (
    <MainLayout mainClassName={isAboutPage ? 'about-page-main' : 'home-page-main'}>
      {isAboutPage ? <About /> : <Home />}
    </MainLayout>
  )
}
