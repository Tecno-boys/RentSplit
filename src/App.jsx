import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'    
import LandingPage from './pages/LandingPage'
import Expenses from './pages/Expenses'
import RecurringBills from './pages/recurringbills'
import DebtSettle from './debtsettle'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/recurring-bills" element={<RecurringBills />} />
      <Route path="/debt-settle" element={<DebtSettle />} />
    </Routes>
  )
}

export default App
