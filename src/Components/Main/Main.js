import './main.scss';
import PropTypes from 'prop-types';
import {Form, Button} from 'react-bootstrap';


const Main = ({}) => {

    return ( 
        <>
        <Form className='main'>
            <div className='sub'>//me quede en 1:10:00
            <Form.Group>
                <Form.Label >Ingrese una nueva tarea</Form.Label>
                <Form.Control className='control'></Form.Control>
            </Form.Group>
            <Button className='button' type='submit'>Agregar</Button>
            </div>
        </Form>
        </>
     );
}
 
Main.propTypes = {
    nombre : PropTypes.string.isRequired
}
export default Main;