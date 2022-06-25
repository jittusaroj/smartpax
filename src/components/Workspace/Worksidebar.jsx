import {React,useEffect,useState} from 'react';
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown';
import {Form} from 'react-bootstrap';


function Worksidebar ()  {

  const data = JSON.parse(localStorage.getItem('user'));
  const [list, setList] = useState([]);
  useEffect(()=>{

    axios.get(process.env.REACT_APP_LOCAL_API+'/workspace/list/'+data.id,{
      'Content-Type': 'application/json',
    }).then(res => {                   
              setList(res.data);           
            })
  
          }, []) 
   
    return (
        <>
       
  
    

<p className='fs-6 mt-5'><b>WORKSPACE</b> </p>
  
<Form.Select aria-label="Default select example">
    
  <option>Data Sets</option>
  <option >Favoriate</option>
  <option >My Workspace</option>
                   
                     {
                       list.map((wspace, i) => { 
                           return(
                           <option >{wspace.name}</option>
                          
                           );
                       })
                       } 

  
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