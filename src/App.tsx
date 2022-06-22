import { Header } from "./components/Header"
import { Lesson } from "./components/Lesson"
import { Sidebar } from "./components/Sidebar"
import { Video } from "./components/Video"

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Video />
      <Lesson />
    </div>
  )
}

export default App
