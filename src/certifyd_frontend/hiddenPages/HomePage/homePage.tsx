import { Header } from './header'
import { Cta } from './cta'
import { Layout } from './layout'
import { Testimonial } from './testimonial'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'


const HomePage = () => {
  return (
    <>
        <Navbar />
        <Header />
        <Cta />
        <Layout />
        <Testimonial />
        <Footer />
    </>
  )
}

export default HomePage