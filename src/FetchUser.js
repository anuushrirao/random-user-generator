import React, { useEffect, useState } from 'react';

const url = `https://randomuser.me/api`;

const FetchUser = () => {
    const [users, setUsers] = useState([]);

    const fetchUserData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data.results);
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <section className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
            <div className="bg-gray-800 p-20 rounded-lg shadow-lg flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-10">Random User Generator</h1>
                {users.map((user) => (
                    <div key={user.login.uuid} className="flex items-center space-x-4 mb-4">
                        <img
                            src={user.picture.large}
                            alt={user.name.first}
                            className="w-40 h-40 rounded-xl mr-4"
                        />
                        <div>
                            <h1 className="text-2xl font-semibold p-1">{`${user.name.first} ${user.name.last}`}</h1>
                            <p className="text-gray-400 text-xl">{user.gender}</p>
                            <p className="text-gray-400 text-xl">{user.phone}</p>
                        </div>
                    </div>
                ))}
                <button onClick={fetchUserData} className="mt-5 px-4 py-2 bg-indigo-300 text-white rounded hover:bg-indigo-200 focus:outline-none focus:bg-blue-300">
                Generate New User
            </button>
            </div>
            
        </section>
    );
};

export default FetchUser;
