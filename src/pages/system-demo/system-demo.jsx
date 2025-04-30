
import { Outlet } from 'react-router'
import './system-demo.css'
import SystemHeader from './components/system-header/system-header'

export default function SystemDemo() {
  return (
    <>
        <SystemHeader></SystemHeader>
        <div className="system-demo">
          <Outlet />
        </div>
    </>
  )
}
