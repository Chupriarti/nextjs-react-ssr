import Link from "next/link"
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
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>    
                )}
            </ul>
        </div>
    )
}

export default Users
