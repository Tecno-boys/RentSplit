import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard'    
import LandingPage from './pages/landingpage/LandingPage'
import Expenses from './pages/expenses/Expenses'
import RecurringBills from './pages/recurringbills/recurringbills'
import DebtSettle from './pages/debtsettle/debtsettle'
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
