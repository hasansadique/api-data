import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import { Pagination } from './components/pagination';
const API = "https://jsonplaceholder.typicode.com/users";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(API)
        const users = await response.json()
        setIsLoading(false)
        setUsers(users)
        console.log(users)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }
    getUsers()
  }, [])

  if (isLoading) {
    return <>
      <p>Loading...</p>
    </>
  }
  return (
    <div className="App">
      <section>
        {
          users.map(user => (
            <Card
              key={user.id}
              user={user}
            />
          ))
        }
        <Pagination />
      </section>

    </div>
  );
}

export default App;
