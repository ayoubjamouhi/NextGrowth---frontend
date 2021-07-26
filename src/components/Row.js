import React from 'react';
import { getDate } from '../helpers/getDate';


function Row({user}){
      const dateDeCreation = getDate(user.createdDate);
      let spanColor = '#FDB64D';
      if(user.status === 'Validé')
        spanColor = "#5BE881"
      else if(user.status === 'Rejeté')
        spanColor = "#FF0000";
  return(
    <tr>
      <td>{user.id}</td>
      <td>{dateDeCreation}</td>
      <td className="etat" >
          <span style={{
            backgroundColor: spanColor,
            display: 'block',
            color: '#fff',
            width: '70%',
            margin:'0 auto',
            borderRadius: '5px',
            padding: '5px'
          }}>
            {user.status}
            </span>
      </td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.userName}</td>
      <td>{user.registrationNumber}</td>
      <td>
        <a href="#">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>
        </a>
      </td>
    </tr>

  )
}
export default Row;