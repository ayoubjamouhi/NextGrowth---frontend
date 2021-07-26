import React, { useState } from 'react';
import styled from 'styled-components';
import Row from './Row';

const TableStyle = styled.table`
  width: 100%;
  text-align: center;
  padding: 3rem;
  box-shadow: rgb(0 0 0 / 19%) 0px 8px 8px, rgb(0 0 0 / 23%) 0px 3px 3px;
  border-radius: 4px;
`;

function Table() {
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
  ]);
  return (
  <TableStyle>
    <tr>
      <th>ID</th>
      <th>Date de création</th>
      <th>Etat</th>
      <th>Nom</th>
      <th>Prénom</th>
      <th>Nom d'utilisateur</th>
      <th>Matricule</th>
      <th>Action</th>
    </tr>
    {users.map(user => <Row user={user} />)}
  </TableStyle>
  )
};

export default Table;