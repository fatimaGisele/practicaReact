import {Nav} from 'react-bootstrap';
import './myNav.scss';

const MyNav = () => {
    return ( 
        <>
    <Nav className='nav'>
    <Nav.Item className='item'>
      <Nav.Link className='link'>Active</Nav.Link>
    </Nav.Item>
    <Nav.Item className='item' >
      <Nav.Link className='link' >Link</Nav.Link>
    </Nav.Item>
    <Nav.Item className='item' >
      <Nav.Link className='link'>Link</Nav.Link>
    </Nav.Item>
  </Nav>
        </>
     );
}
 
export default MyNav;