import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import '../styles/adduser.css';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const AddUserStyle = styled.div`
  display:flex;
  justify-content: flex-end;
  text-align: center;
  margin: 2rem auto;
  padding: 1.3rem;
  box-shadow: rgb(0 0 0 / 19%) 4px 2px 3px 2px, rgb(0 0 0 / 23%) 2px 2px 2px 2px;
  border-radius: 4px;
`;
const AddButton = styled.button`
  background-color: rgba(255, 170, 10, 1);
  cursor: pointer;
  border: 0;
  padding: 15px 30px;
  border-radius: 3px;
  font-size: 1rem;
`;
function AddUser(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    createdDate: "",
    status: "",
    firstName: "",
    lastName: "",
    userName: "",
    registrationNumber: "",
  });
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000';
  }
  function closeModal() {
    setIsOpen(false);
  }
  function addUser(e) {
    e.preventDefault();
    if(validateForm(errors)) {
      console.info('Valid Form')
      props.addUser(user);
      closeModal()
    }else{
      console.error('Invalid Form')
    }
  }
  function handleChanges(event) {
    //valider()
    event.preventDefault()
    const { name, value } = event.target;
    setUser({ ...user, [name] : value });

      switch (name) {
      case 'firstName':
        errors.firstName =
          value.length < 5
            ? 'Full Name must be 5 characters long!'
            : '';
        break;
      case 'lastName':
        errors.lastName =
          value.length < 5
            ? 'LastName must be 5 characters long!'
            : '';
        break;
      case 'userName':
        errors.userName =
          value.length < 5
            ? 'UserName must be 5 characters long!'
            : '';
        break;
      case 'status':
        errors.status =
          value.length < 5  ||  (value !== 'Validé' && value !== 'Rejeté' && value !== 'En validation')
            ? 'status must be 5 characters long!'
            : '';
        break;
      case 'createdDate':
        errors.createdDate =
          value.length < 5
            ? 'date must be 5 characters long!'
            : '';
        break;
      case 'registrationNumber':
        errors.registrationNumber =
          value.length < 5
            ? 'matricule must be 5 characters long!'
            : '';
        break;
      default:
        break;
      }
      //setErrors({errors, [name]: value})
  }
  function validateForm(errors) {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }
  return (
    <AddUserStyle>
      <AddButton onClick={openModal}>Ajouter Utilisateur</AddButton>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Ajout d'utilisateurs</h2>
        <form>
          <div>
            <label htmlFor="nom" >
              <span>Nom</span>
              <input type="text" name="firstName" id="nom" value={user.firstName} onChange={handleChanges}/>
              {!validateForm(errors) && <span style={{color: '#f00'}}>{errors.firstName}</span>}
            </label>
            <label htmlFor="prenom" >
              <span>Prénom</span>
              <input type="text" name="lastName" id="prenom" value={user.lastName} onChange={handleChanges}/>
              {!validateForm(errors) && <span style={{color: '#f00'}}>{errors.lastName}</span>}
            </label>
            <label htmlFor="etat">
              <span>Etat</span>
              <input type="text" name="status" id="etat"  value={user.status} onChange={handleChanges}/>
              <span>Validé ou Rejeté ou En validation</span>
              {!validateForm(errors) && <span style={{color: '#f00'}}>{errors.status}</span>}
            </label>
          </div>
          <div>
            <label htmlFor="nomutil" >
              <span>Nom d'utilisateur</span>
              <input type="text" name="userName" id="nomutil" value={user.userName} onChange={handleChanges}/>
              {!validateForm(errors) && <span style={{color: '#f00'}}>{errors.userName}</span>}
            </label>
            <label htmlFor="datecrea" >
              <span>Date de création</span>
              <input type="date" name="createdDate" id="datecrea" value={user.createdDate} onChange={handleChanges}/>
              {!validateForm(errors) && <span style={{color: '#f00'}}>{errors.createdDate}</span>}
            </label>
          </div>
          <div>
            <label htmlFor="matricule" >
              <span>Matricule</span>
              <input type="text" name="registrationNumber" id="matricule" value={user.registrationNumber} onChange={handleChanges}/>
              {!validateForm(errors) && <span style={{color: '#f00'}}>{errors.registrationNumber}</span>}
            </label>
          </div>
          <div className="enregistrer">
            <button type="submit" onClick={addUser}>Enregistrer</button>
          </div>
        </form>
      </Modal>
    </AddUserStyle>
  )
}

export default AddUser;