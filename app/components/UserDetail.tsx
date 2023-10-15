'use client'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { UserJson } from '../interfaces/UserType';
import Image from 'next/image';

function getUser(id: number) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => response.json());
}

const UserDetail = () => {
    const params = useParams();
    console.log("params", params)
    const [user, setUser] = useState<UserJson>();

    useEffect(() => {
        getUser(parseInt(params.id as string)).then((data) => setUser(data));
    }, [params.id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
            <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <Image height={120} width={120} src={"https://loremflickr.com/320/240/"} alt={user.name}/>
                </div>
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {user.name}!
                <div className="badge badge-secondary">{user.company.name}</div>
                </h2>
                <p>{user.company.catchPhrase}</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">{user.website}</div> 
                <div className="badge badge-outline">{user.phone}</div>
                </div>
            </div>
        </div>
        </>
    );
};

export default UserDetail;
