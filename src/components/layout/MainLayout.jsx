import Header from './Header'
import Footer from './Footer'

export default function MainLayout({ children, mainClassName = '' }) {
  return (
    <>
      <Header />
      <main className={mainClassName}>{children}</main>
      <Footer />
    </>
  )
}
