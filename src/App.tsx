import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"

import "./index.scss";
import LoginPage from './pages/login';
import Home from './pages/home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
