import React from 'react';
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
  padding: 3rem;
  box-shadow: rgb(0 0 0 / 19%) 4px 2px 3px 2px, rgb(0 0 0 / 23%) 2px 2px 2px 2px;
  border-radius: 4px;
`;
const AddButton = styled.button`
  background-color: rgba(255, 170, 10, 1);
  cursor: pointer;
  border: 0;
  padding: 10px 20px;
  border-radius: 3px;
  font-size: 1rem;
`;
function AddUser() {
    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

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
              <input type="text" name="nom" id="nom" />
            </label>
            <label htmlFor="prenom" >
              <span>Prénom</span>
              <input type="text" name="prenom" id="prenom" />
            </label>
            <label htmlFor="etat">
              <span>Etat</span>
              <input type="text" name="etat" id="etat" />
            </label>
          </div>
          <div>
            <label htmlFor="nomutil" >
              <span>Nom d'utilisateur</span>
              <input type="text" name="nomutil" id="nomutil" />
            </label>
            <label htmlFor="datecrea" >
              <span>Date de création</span>
              <input type="text" name="datecrea" id="datecrea" />
            </label>
          </div>
          <div>
            <label htmlFor="matricule" >
              <span>Matricule</span>
              <input type="text" name="matricule" id="matricule" />
            </label>
          </div>
          <div className="enregistrer">
            <button type="submit" onClick="addUser">Enregistrer</button>
          </div>
        </form>
      </Modal>
    </AddUserStyle>
  )
}

export default AddUser;