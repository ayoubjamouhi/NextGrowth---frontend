import './App.css';
import Table from './components/Table';
import AddUser from './components/AddUser';
import styled from 'styled-components';

const AppStyle = styled.div`
  width: 90%;
  margin: 2rem auto;
`;
function App() {
  return (
    <AppStyle>
      <Table />
      <AddUser />
    </AppStyle>
  );
}

export default App;
