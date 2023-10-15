import React from 'react'
import { UserJson, User } from '../interfaces/UserType';
import UserTable from './UserTable';

async function getUsers() {
    var response = await fetch('https://jsonplaceholder.typicode.com/users?results=10');//);//
    var users: UserJson[] = await response.json();
    console.log("users", JSON.stringify(users[0]))
    return users;
};

const Users = async () => {
    const users = await getUsers();
    return (
        <>
            <div className="overflow-x-auto">
                <UserTable users={users} />
            </div>
        </>
    )
}

export default Users;
