import React from 'react'
import employees from '../assets/employees'

function EmployeeList({employees, openModal}) {
    return (
        <>
            <h2>Employee Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                {
                employees.map(
                    (employee)=>(
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.position}</td>
                            <td>
                                <button onClick={()=>openModal(employee)}>แก้ไข</button>
                                <button>ลบ</button>
                            </td>
                        </tr>
                    )
                )
                }
                </tbody>
            </table>
        </>
    )
}
export default EmployeeList