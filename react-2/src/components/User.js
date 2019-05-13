import React from 'react'
import { Link } from 'react-router-dom'

const User = (props) => (
    <Link to='/'>
        <button className="btn" onClick={
            () => {
                props.onLogOut()
            }
        } >Logout</button>
    </Link>
)

export default User