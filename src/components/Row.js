import React from 'react';
import { getDate } from '../helpers/getDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import '../styles/row.css'
function Row({user, deleteUser}){
  const dateDeCreation = getDate(user.createdDate);
  let spanColor = '#FDB64D';
  if(user.status === 'Validé')
    spanColor = "#5BE881"
  else if(user.status === 'Rejeté')
    spanColor = "#FF0000";
  function removeUser(event) {
    event.preventDefault();
    deleteUser(user.id)
  }
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
        <button onClick={removeUser}  >
          <FontAwesomeIcon icon={faTrashAlt} style={{color: '#555'}}/>
        </button>
      </td>
    </tr>
  )
}
export default Row;