import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import './App.scss'

function App() {
  return (
    <>
    <Layout />
      <Routes>
        <Route path="/React-Task-6" element={<Home />}/>
          <Route path="/React-Task-6/about" element={<About />} />
          <Route path="/React-Task-6/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
