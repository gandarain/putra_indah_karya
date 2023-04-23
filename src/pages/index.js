import Layout from "../components/Layout";
import Header from "../components/Header";
import Home from "../components/Home";
import Services from '../components/Services';
import Expertise from '../components/Expertise';
import About from '../components/About';
import Footer from '../components/Footer';

const Page = () => (
  <Layout pageTitle="Putra Indah Karya">
    <Header />
    <Home />
    <About />
    <Services />
    <Expertise />
    <Footer />
  </Layout>
)

export default Page