import {
  Layout,
  Header,
  Home,
  About,
  Services,
  Expertise,
  Project,
  Contact,
  Footer
} from '../components'

const Page = () => (
  <Layout pageTitle="Putra Indah Karya">
    <Header />
    <Home />
    <About />
    <Services />
    <Expertise />
    <Project />
    <Contact />
    <Footer />
  </Layout>
)

export default Page