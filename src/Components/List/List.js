import {Container, Row, Col, Button} from 'react-bootstrap';
import './list.scss';

const List = ({id,tarea, descripcion, eliminar}) => {

    const deleteTask = (e) =>{
        e.preventDefault();
        const {id} = e.target;
        eliminar(id);
    }

    return ( 
        <>
        <Container className='list'>
            <Row>
                <Col>
                <h3>Tarea:{tarea}</h3>
                <h4>Descripcion: {descripcion}</h4>
                <Button className='button' type='submit' id={id} onClick={deleteTask}>Eliminar</Button>
                </Col>
            </Row>
        </Container>
        </>
     );
}
 
export default List;