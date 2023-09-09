import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../redux/UserReducer'
import { useNavigate } from 'react-router-dom'

function Create() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [tost, setTost] = useState(false)

    const navigate = useNavigate()

    const users = useSelector((state) => state.users)


    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!name || !email){
            setTost(true)
        }
        else{
            if(users.length == 0){
                dispatch(addUser({id:1,name, email}))
                navigate('/')
            }
            else{
                dispatch(addUser({id:users[users.length - 1].id + 1 , name, email}))
                navigate('/')
            }
        }
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3 className='fw-bold'>Add new user</h3>
            <form onSubmit={handleSubmit}>
                <div className='fw-bold'>
                    <label>Name:</label>
                    <input type='text' name='name' className='form-control' onChange={(e)=>setName(e.target.value)}/>
                </div><br/>
                <div className='fw-bold'>
                    <label>Email:</label>
                    <input type='email' name='email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                </div><br/>
                <button className='btn btn-info'>Submit</button>
                <br/>
                {tost && <div className='fw-bold fs-5 text-danger'>Fill The Details</div>}
            </form>
        </div>
    </div>
  )
}

export default Create