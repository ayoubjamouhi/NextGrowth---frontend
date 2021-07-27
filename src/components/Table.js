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

function Table({users, deleteUser}) {
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
    {users.map(user => <Row user={user} deleteUser={deleteUser}/>)}
  </TableStyle>
  )
};

export default Table;