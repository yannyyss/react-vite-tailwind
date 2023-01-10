import React from 'react'
import UserCard from '../UserCard/UserCard'
import useUser from '../../hooks/useUsers'
import Loader from '../Loader/Loader'
import ErrorHandler from '../ErrorHandler/ErrorHandler'

function UsersList() {
  const [users, isLoading, error] = useUser() 

  const renderUsers = () => (
    <>
      {users.map((user,i) => <UserCard key={`user-${i}`} user={user}/>)}
    </>
  )

  return (
    <div>
      {isLoading ? <Loader/> : error ? <ErrorHandler error={error}/> : renderUsers() }
    </div>
  )
}

export default UsersList