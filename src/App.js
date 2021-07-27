import { useState } from 'react';
import './App.css';
import Table from './components/Table';
import AddUser from './components/AddUser';
import styled from 'styled-components';

const AppStyle = styled.div`
  width: 90%;
  margin: 2rem auto;
`;

function App() {
  function addUser(newUser){
    setUsers([...users, newUser])
  }
  const [users, setUsers] = useState([
    {
      id: "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
     {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
       {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
  ])
  function deleteUser(id){
    const newUsers = users.filter(item=> item.id!== id);
    setUsers(newUsers)
  }
  return (
    <AppStyle>
      <Table users={users} deleteUser={deleteUser}/>
      <AddUser addUser={addUser} />
    </AppStyle>
  );
}

export default App;
