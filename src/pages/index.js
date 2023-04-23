import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';
import About from '../components/About';
import Footer from '../components/Footer';

const Home = () => (
  <Layout pageTitle="Putra Indah Karya">
    <Header />
    <Hero />
    <About />
    <Feature/>
    <Service />
    <Footer />
  </Layout>
)

export default Home