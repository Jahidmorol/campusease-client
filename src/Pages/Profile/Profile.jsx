import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Profile = () => {
    const [users, setUsers] = useState({});
    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://campusease-server.vercel.app/student?email=${user?.email}`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setUsers(result[0]);
            });
    }, []);

    console.log(users);
    return (
        <div className='h-screen flex items-center'>
            <div className="bg-gray-500  border-4 border-[#6fb9b9] w-[30%] mx-auto rounded-lg shadow-md p-6 ">
          <div className="flex items-center mb-6 ">
            {user.photoURL && (
              <img
                className="h-16 w-16 rounded-full mr-4 border-2"
                src={user.photoURL}
                alt="Profile"
              />
            )}
            <h2 className="text-white text-2xl font-bold">{user.displayName}</h2>
          </div>
          <div className="mb-4">
            <p className="text-white">
              <span className="font-semibold">Number:</span> {users.candidatePhone}
            </p>
            <p className="text-white">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-white">
              <span className="font-semibold">University:</span> {"Harvard University Cambridge"}
            </p>
            <p className="text-white">
              <span className="font-semibold">Address:</span> {users.address}
            </p>
          </div>
        </div>
        </div>
      );
};

export default Profile;