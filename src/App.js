import React, { useState } from 'react';
import Form from './form';
import './App.css';
const teamMembers = [
  {
    name: 'Tracy',
    email: 'tracy@gmail.com',
    role: 'Frontend engineer',
},
  {
    name: 'Josh',
    email: 'josh@gmail.com',
    role: 'Backend engineer',
},
  {
    name: 'Trisha',
    email: 'codingqueen@gmail.com',
    role: 'Software engineer',
}
]
function App() {
  const  [teamList, setTeamList] = useState(teamMembers)
  return (
  <div className='container'>
    <h1>Team Members</h1>
    {
      teamList.map((member, idx) => {
        console.log(member)
        return <div key={idx}> <b>Name:</b> {member.name} <b>E-mail:</b> {member.email} <b>Role:</b> {member.role}</div>
      })
    }
    <Form teamList={teamList} setTeamList={setTeamList} />
  </div>
  )
}

export default App;
