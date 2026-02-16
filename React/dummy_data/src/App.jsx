import { useState } from 'react'
import MyRoute from './components/MyRoute'
import './App.css'
import Modal from 'react-modal';
import "./modal.css"
import employees from './assets/employees';
import EmployeeList from './components/EmployeeList';

Modal.setAppElement('#root')

function App() {
  const [data, setdata] = useState(employees);
  const [Open, setOpen] = useState(false)
  const openModal = ()=> setOpen(true);
  const closeModal = ()=> setOpen(false)

  return (
    <>
    <h1>MyRoute</h1>
    <button onClick={openModal}>Open Model</button>

    <Modal
      isOpen = {Open}
      onRequestClose={closeModal}
      contentLabel='Example Modal'
      className="Modal"
      overlayClassName="Overlay"
      >
        <h2>Hello Modal!!!</h2>
        <label htmlFor="id">รหัวพนักงาน</label>
        <input type="text" id="id" /><br />
        <label htmlFor="name">ชื่อ</label>
        <input type="text" id="name" /><br />
        <label htmlFor="age">อายุ</label>
        <input type="text" id="age" /><br />
        <label htmlFor="position">ตำแหน่งงาน</label>
        <input type="text" id="position" /><br />
        <button onClick={closeModal}>Close</button>
      </Modal>
      <MyRoute/>
      <EmployeeList employees={employees} openModal={openModal}/>
    </>
  )
}

export default App
