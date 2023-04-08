import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postUsersAction } from '../redux/actions'
import MyInput from '../components/ui/myInput/MyInput'
import MyButton from '../components/ui/myButton/MyButton'

const MainPage = () => {

    const dispatch = useDispatch()
    const { user, finished } = useSelector(state => state.usersReducer)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postUsersAction(value))
    }

    const [value, setValue] = useState({
        name: "",
        username: "",
        email: "",
        website: ""
    })

    const handleChange = (e) => {
        setValue({ ...value, [e.target.id]: e.target.value })
    }

    return (
        <div className='main__inner'>
            <h2>Users</h2>
            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <MyInput id="name" placeholder="enter..." onChange={handleChange} />
                <label htmlFor="username">Username</label>
                <MyInput id="username" placeholder="enter..." onChange={handleChange} />
                <label htmlFor="email">e-mail</label>
                <MyInput id="email" placeholder="enter..." onChange={handleChange} />
                <label htmlFor="website">Website</label>
                <MyInput id="website" placeholder="enter..." onChange={handleChange} />
                <MyButton>submit</MyButton>
            </form>
            {
                finished
                    ?
                    <p>user {user.name} has been succefully added</p>
                    :
                    <p></p>
            }
        </div>
    )
}

export default MainPage