import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

function Loader() {
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh', // Asegura que ocupe toda la altura de la pantalla
    }}
  >
    <Card>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      Loading...
    </Card>
  </div>
   
  );
}

export default Loader;