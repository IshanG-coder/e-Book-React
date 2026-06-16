import { AllRoutes } from './routes/AllRoutes'
import { Header, Footer } from "./components"

function App() {

  return (
    <div className=" App dark:bg-slate-800">
    <div className="flex flex-col min-h-screen ">

      <Header />

      <main className="flex-grow">
        <AllRoutes />
      </main>

      <Footer />

    </div>
    </div>
  )
}

export default App