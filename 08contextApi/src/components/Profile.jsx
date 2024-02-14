import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    // conditinal if-else return

    if(!user) return <div>Please Login In </div>

    return <div>Welcome {user.username}</div>
}

export default Profile