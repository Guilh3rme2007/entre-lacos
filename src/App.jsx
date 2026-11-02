import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useMemo, useState } from 'react'
import './App.css'
import { LandingPage } from './pages/LandingPage'
import { ElderShell } from './pages/ElderPages'
import { YoungShell } from './pages/YoungPages'
import { AdminShell } from './pages/AdminPages'

function App() {
  const [fontScale, setFontScale] = useState(1)
  const [highContrast, setHighContrast] = useState(false)

  const appStyle = useMemo(
    () => ({
      '--font-scale': fontScale,
    }),
    [fontScale],
  )

  return (
    <BrowserRouter>
      <div className="app-root" data-contrast={highContrast} style={appStyle}>
        <Routes>
          <Route path="/" element={<LandingPage setFontScale={setFontScale} setHighContrast={setHighContrast} />} />
          <Route path="/idoso/*" element={<ElderShell setFontScale={setFontScale} setHighContrast={setHighContrast} fontScale={fontScale} />} />
          <Route path="/jovem/*" element={<YoungShell setFontScale={setFontScale} setHighContrast={setHighContrast} fontScale={fontScale} />} />
          <Route path="/admin/*" element={<AdminShell setFontScale={setFontScale} setHighContrast={setHighContrast} fontScale={fontScale} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
