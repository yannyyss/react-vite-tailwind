import React from 'react'
import '../../App.css'

function UserCard({user}) {

  const {avatar, first_name, last_name, email} = user

  const getFullName = () => `${first_name} ${last_name}`

  return (
    <div className="flex flex-row border border-slate-500 mb-8">
      <img src={avatar} width="100" height="100" alt="avatar img" />
      <div className="flex flex-col items-center justify-center m-4 w-full">
        <p className="text-black text-2xl pb-0">{getFullName()}</p>
        <span className="text-slate-500">{email}</span>
      </div>
    </div>
  );
}

export default UserCard