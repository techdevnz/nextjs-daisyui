import React from 'react'
import { UserJson } from '../interfaces/UserType';
import Image from 'next/image';
import Link from 'next/link';
interface Props {
    users: UserJson[]
}

const UserTable = ( {users}: Props ) => {

    if (!users) {
        return <div>Loading...</div>;
    }

  return (
    <table className="table table-zebra">
    <thead>
    <tr>
        <th>
        <label>
            <input type="checkbox" className="checkbox" />
        </label>
        </th>
        <th>Name</th>
        <th>Location</th>
        <th>Favorite Color</th>
        <th></th>
    </tr>
    </thead>
    <tbody>
    {users.map((user) => (
        <tr key={user.id}>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span className="text-xs">{user.name.substring(0,1)}{user.name.substring(user.name.length -1)}</span>
                    </div>
                    </div>
                    {/* <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <Image height={32} width={32} src={} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div> */}
                    <div>
                        <div className="font-bold">{user.name}</div>
                        {/* <div className="text-sm opacity-50">{user.location.country}</div> */}
                    </div>
                </div>
            </td>
            <td>
                {user.address.street}, {user.address.suite}, {user.address.zipcode}
                <br />
                <span className="badge badge-ghost badge-sm">{user.address.city}</span>
            </td>
            <td>{user.email}</td>
            <td>
                <Link href={`/userdetail/${user.id}`}>
                <button className="btn btn-ghost btn-xs btn-accent btn-outline">details</button>
                </Link>
            </td>
        </tr>
    ))}
</tbody>
<tfoot>
<tr>
<th></th>
<th>Name</th>
<th>Job</th>
<th>Favorite Color</th>
<th></th>
</tr>
</tfoot>

</table>
  )
}

export default UserTable