import './App.css';
import TopBar from './components/TopBar';
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import splashImage from './instacarbackground.webp'
import StoreListing from './components/StoreListing';

const Splash = styled.div`
  width: 100vw;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${splashImage});
  background-color:#dfeed6;
  position: absolute;
  left: 0;
  top: 40px;
  right: 0;
  z-index: -1;
`

const StyledStoreListing = styled(StoreListing)`
  padding-top: 200px;

`

function App() {
  return (
    <>
      <TopBar/>
      <StyledStoreListing/>
      <Splash/>
    </>
  );
}

export default App;
