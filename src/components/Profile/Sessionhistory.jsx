import {React,useEffect,useState} from 'react';
import axios from "axios";
import { Table} from 'react-bootstrap';


function Sessionhistory (props)  {
    var url = process.env.REACT_APP_LOCAL_API;
console.log(props.data.id);
    const [udata, setUdata] = useState([]);
    const [date, setDate] = useState([]);
 
    useEffect(()=>{
      

        axios.get(url+'/history/list/'+props.data.id,{   
              'Content-Type': 'application/json',
          })
                .then(user => {
                    console.log(user);
  
                    setUdata(user.data);
                    setDate(user.data[0].created_at)
                    return udata;
  
                })
  
              }, [props.data.id]) 

    return (
        <>


        
        <section className="tab-pane fade" id="Session_history" role="tabpanel" aria-labelledby="contact-tab">
                                       <div className="row">
                                       <div className="col-md-1"></div>
                                        <div className="col-md-10">
                                          <div className="row mb-2">
                                              <div className="col-md-6 col-6">
                                                  <p>{udata.length} Sessions</p>
                                              </div>
                                              <div className="col-md-6 col-12">
                                                 <div style={{float:'right'}}> <i className="fa fa-clock-o"></i> Recent Session : { date }</div>
                                              </div>
                                          </div>
                                          <Table className=" session-table">
                                              <thead className='thead-bg'>
                                                  <tr className="row">
                                                      <td className="col-sm-3 p-2" style={{textAlign:"center"}}>Device</td>
                                                      <td className="col-sm-3 p-2" style={{textAlign:"center"}}>Location</td>
                                                      <td className="col-sm-3 p-2" style={{textAlign:"center"}}>Last usage</td>
                                                      <td className="col-sm-3 p-2" style={{textAlign:"center"}}>
                                                        {/* Status */}
                                                        </td>
                                                  </tr>
                                              </thead>

                                              <tbody>
                                             
                                              {
                       udata.map((data, i) => { 
                           return(
                            <tr key={i} >
                            <td colSpan={2}>
                                <div className="row">
                                    <div className="col-auto p-2">
                                         <span className="f-20"><i className="fa fa-desktop" aria-hidden="true"></i> </span> 
                                    </div>
                                    <div className="col-auto">
                                          <span className="extra-font">{ (data.device).split(',')[0] }</span> <br/> { (data.device).split(',')[1] }
                                    </div>
                                </div>
                             </td>
                             <td colSpan={3}>
                             { data.location }
                             </td>
                             <td colSpan={3}>
                             { data.created_at }
                             </td>
                             <td >
                                 <a className="log_out">Logout</a>
                             </td>
                        </tr>

                           );
                       })
                       } 
                                                 
                                                 
                                              </tbody>
                                          </Table>
                                         </div>
                                         
                                       </div>
                                  </section>
  
  
  </>
  );
  }
  export default Sessionhistory 