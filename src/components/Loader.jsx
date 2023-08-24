import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

function Loader() {
  return (
    <Card>
        <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </Card>
   
  );
}

export default Loader;