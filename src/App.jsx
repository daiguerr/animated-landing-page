import './App.css';
import CardSection from './Components/CardSection';
import Header from './Components/Header';
import {OuterLayout} from './styles/Layouts';
import styled from 'styled-components';
import ChartSection from './Components/ChartSection';
import Messagingsection from './Components/MessagingSection';


function App() {
  return (
    <div className="App">
      <Header/>
      <OuterLayout>
        <MainStyled>
          <CardSection/>
          <ChartSection/>
          <Messagingsection/>
        </MainStyled>
      </OuterLayout>
    </div>
  );
}

const MainStyled =styled.main`

`;

export default App;
