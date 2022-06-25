import {React} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {Form} from 'react-bootstrap';


function Worksidebar ()  {

   
   
    return (
        <>
       
  
    

<p className='fs-6 mt-5'><b>WORKSPACE</b> </p>
  
<Form.Select aria-label="Default select example">
    
  <option>Data Sets</option>
  <option value="1">Favoriate</option>
  <option value="2">My Workspace</option>
  
  <hr/>
  <br/>
  <option value="3"><a data-bs-toggle="modal" data-bs-target="#userModal">Add Workspace</a></option>
  <br/>
  
  
</Form.Select>
      <p className='team-font mt-2'>
     
      <Dropdown className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true" style={{backgroundColor:'transparent', border:'0px solid', color:'black' }}>
    <i className='bx bx-plus'></i>      Add
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#">New Board</Dropdown.Item>
      <Dropdown.Item href="#">New Docs</Dropdown.Item>
      <Dropdown.Item href="#">New Dashboard</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
      </p>
      <p className='team-font'>
      <i className='bx bx-filter-alt'></i>  Filter 
      </p>
      <p className='team-font'>
      <i className='bx bx-search'></i> Search 
      </p>
      <p className='team-font'>
      <i className='bx bx-add'></i> <a data-bs-toggle="modal" data-bs-target="#addworkspace">Add Workspace</a>
      </p>

        </>
        );
}
export default Worksidebar