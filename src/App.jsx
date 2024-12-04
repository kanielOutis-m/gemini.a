import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="flex overflow-x-hidden">
      <Sidebar />
      <Main/>
    </div>
  )
}

export default App
