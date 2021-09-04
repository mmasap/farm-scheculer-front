import { Container, CssBaseline } from '@material-ui/core';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container component='main'>
        <div>hello</div>
      </Container>
    </>
  );
};

export default App;
