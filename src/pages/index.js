import components from '@/components'

const {
  Layout,
  Header,
  About,
  Services,
  Home,
  Expertise,
  Project,
  Contact,
  Footer
} = components

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