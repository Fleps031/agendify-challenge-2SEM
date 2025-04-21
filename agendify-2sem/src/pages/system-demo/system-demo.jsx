// src/pages/system-demo/system-demo.jsx
import { Outlet } from 'react-router-dom'
import './system-demo.css'

export default function SystemDemo() {
  return (
    <div className="system-demo">
      <Outlet />
    </div>
  )
}
