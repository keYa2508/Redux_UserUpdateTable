import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteUSer } from '../redux/UserReducer'

function Home() {

    const users = useSelector((state) => state.users)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [create, setCreate] = useState(false)

    const handleDelete = (id) => {
        dispatch(deleteUSer({id:id}))
    }

    const popUp = () => {
        if(users.length == 0){
            setCreate(true)
        }
        else{
            setCreate(false)
        }
    }

    useEffect(()=>{
        popUp()
    })

  return (
    <div className='container d-flex flex-column gap-3 align-items-center'>
        <h2>Users Updating Table</h2>
        <Link to="/create" className='btn btn-success d-flex align-self-end'>Create</Link>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th className='col-1'>ID</th>
                    <th className='col-3'>Name</th>
                    <th className='col-5'>Email</th>
                    <th className='col-3'>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td className='d-flex gap-3 justify-content-center'>
                            <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                            <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        {create && 
        <div className='fw-bold fs-5'>
            You Want to Add USERS click &nbsp;
            <span className='text-success' style={{cursor:'pointer'}} onClick={()=>navigate('/create')}>Create button</span>
        </div>}
    </div>
  )
}

export default Home