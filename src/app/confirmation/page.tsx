'use client';

import { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data); 
    }

    fetchUsers(); 
  }, []); 
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">User List</h2>
      <ul className="list-disc pl-5">
        {users.map((user: any, index: number) => (
          <li key={index}>{++index}- {user.name}</li>
        ))}
      </ul>
    </div>
  );  
}
