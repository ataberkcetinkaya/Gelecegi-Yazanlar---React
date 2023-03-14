import './styles.css';

import ThemeContext from './context/ThemeContext';
import Container from './Container';

//React 301
function App() {
  return (
      <ThemeContext>
        <Container></Container>
      </ThemeContext>
  );
}

export default App;
