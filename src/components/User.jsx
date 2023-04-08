import React from 'react'

const User = ({ userInfo }) => {
    return (
        <div>
            <p>{userInfo.id}. {userInfo.name}</p>
        </div>
    )
}

export default User