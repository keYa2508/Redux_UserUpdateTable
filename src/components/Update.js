import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../redux/UserReducer'

function Update() {

    const users = useSelector((state) => state.users)
    const {id} = useParams()
    const existingUser = users.filter(f => f.id == id)
    const {name, email} = existingUser[0]
    const [upName, setUpName] = useState(name)
    const [upEmail, setUpEmail] = useState(email)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name:upName,
            email: upEmail
        }))
        navigate('/')

    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3 className='fw-bold'>Update user</h3>
            <form onSubmit={handleUpdate}>
                <div className='fw-bold'>
                    <label>Name:</label>
                    <input type='text' name='name' className='form-control'
                    value={upName} onChange={(e) => setUpName(e.target.value)}/>
                </div><br/>
                <div className='fw-bold'>
                    <label>Email:</label>
                    <input type='email' name='email' className='form-control' 
                    value={upEmail} onChange={(e) => setUpEmail(e.target.value)}/>
                </div><br/>
                <button className='btn btn-info'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update