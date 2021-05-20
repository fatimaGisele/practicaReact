import {useState} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import shortId from 'short-id';
import './main.scss';
import './../List/list.scss';
import List from './../List';
import Swal from 'sweetalert';

const Main = () => {

    const [task, setTask] = useState([]);
    
    const createTask = (e) =>{
        e.preventDefault();
        console.log( e.target.elements);
        let [tarea, descripcion] = e.target.elements;
        tarea = tarea.value.trim();
        descripcion = descripcion.value.trim();
        (descripcion&&tarea) ===''? notFound():setTask([...task, {id:shortId.generate(), tarea, descripcion}]);
        e.target.reset();
    }
    
    const eliminar = (id) => {
        const cosa = task.filter((tarea)=>tarea.id !== id);
        setTask(cosa);
    }
    const notFound=()=>{
        Swal({
            position: 'center',
            title: 'No ingresaste los datos pedidos! ponete las pilas',
            showConfirmButton: false,
            timer: 2000
        });
    }

    return ( 
        <>
        <Container>
            <Row >
                <Col className="total">
                    <Form onSubmit={createTask} className="main" md={8} xs={12}>
                <div className='sub'>
                <Form.Group>
                    <Form.Label >Ingrese una nueva tarea</Form.Label>
                    <Form.Control 
                    className='control' 
                    placeholder='Nueva tarea'
                    name="tarea"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Descripcion de mi tarea</Form.Label>
                    <Form.Control 
                    as="textarea"
                    className='textarea'
                    placeholder='Breve descripcion'
                    name="descripcion"/>
                </Form.Group>
                <Button className='b' type='submit'>Agregar</Button>
                </div>
                    </Form>
                </Col>
                <Col className="back" md={4} xs={12}>
                    {task.length === 0 && <h4 className='list'>No hay tareas</h4>}
                    {task.map((tarea) => (
                    <List key={tarea.id} {...tarea} 
                    className='list' eliminar={eliminar}/> ))}
                </Col> 
            </Row>
        </Container>
      
        </>
     );
}
 

export default Main;