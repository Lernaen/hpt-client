/* eslint-disable @typescript-eslint/no-unused-vars */
import AddJob from "./components/addJob"
import Footer from "./components/footer"
import Header from "./components/header"
import Joblist from "./components/jobs"

interface Props {
  id?: number
}

function App(id: Props) {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <section className="main">
        <AddJob />
        <Joblist />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default App
