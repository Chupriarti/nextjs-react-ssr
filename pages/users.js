import React from "react"

const Users = () => {
    const [users, setUsers] = React.useState([
        {id: 1, name: 'alex'},
        {id: 2, name: 'maxim'}
    ])
    return (
        <div>
            <h1>Users page</h1>
            <ul>
                {users.map(user => 
                    <li
                        key={user.id}
                    >
                        {user.name}
                    </li>    
                )}
            </ul>
        </div>
    )
}

export default Users
