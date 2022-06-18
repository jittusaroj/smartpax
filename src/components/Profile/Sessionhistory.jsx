import React from 'react';
import { Table} from 'react-bootstrap';


function Sessionhistory ()  {
    return (
        <>


        
        <section className="tab-pane fade" id="Session_history" role="tabpanel" aria-labelledby="contact-tab">
                                       <div className="row">
                                       <div className="col-md-1"></div>
                                        <div className="col-md-10">
                                          <div className="row mb-2">
                                              <div className="col-md-6 col-6">
                                                  <p>15 Sessions</p>
                                              </div>
                                              <div className="col-md-6 col-12">
                                                 <div style={{float:'right'}}> <i className="fa fa-clock-o"></i> Recent Session : May 25, 2022 01:15 PM</div>
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
                                                  <tr>
                                                      <td colSpan={2}>
                                                          <div className="row">
                                                              <div className="col-auto p-2">
                                                                   <span className="f-20"><i className="fa fa-desktop" aria-hidden="true"></i> </span> 
                                                              </div>
                                                              <div className="col-auto">
                                                                    <span className="extra-font">Windows</span> <br/> Chorme
                                                              </div>
                                                          </div>
                                                       </td>
                                                       <td colSpan={3}>
                                                           Lucknow, Uttar Pradesh, IN
                                                           <br/>
                                                           <small>2409:4063:4202:8ad5:902c:bf99:9fc9:6873</small>
                                                       </td>
                                                       <td colSpan={3}>
                                                           May 25, 2022 01:15 PM
                                                           <br/>
                                                           <small>11 M</small>
                                                       </td>
                                                       <td >
                                                           <a className="log_out">Logout</a>
                                                       </td>
                                                  </tr>

                                                  <tr>
                                                      <td colSpan={2}>
                                                          <div className="row">
                                                              <div className="col-auto p-2">
                                                                   <span className="f-20"><i className="fa fa-desktop" aria-hidden="true"></i> </span> 
                                                              </div>
                                                              <div className="col-auto">
                                                                    <span className="extra-font">Windows</span> <br/> Chorme
                                                              </div>
                                                          </div>
                                                       </td>
                                                       <td colSpan={3}>
                                                           Lucknow, Uttar Pradesh, IN
                                                           <br/>
                                                           <small>2409:4063:4202:8ad5:902c:bf99:9fc9:6873</small>
                                                       </td>
                                                       <td colSpan={3}>
                                                           May 25, 2022 01:15 PM
                                                           <br/>
                                                           <small>11 M</small>
                                                       </td>
                                                       <td >
                                                           <a className="log_out">Logout</a>
                                                       </td>
                                                  </tr>
                                                  <tr>
                                                      <td colSpan={2}>
                                                          <div className="row">
                                                              <div className="col-auto p-2">
                                                                   <span className="f-20"><i className="fa fa-desktop" aria-hidden="true"></i> </span> 
                                                              </div>
                                                              <div className="col-auto">
                                                                    <span className="extra-font">Windows</span> <br/> Chorme
                                                              </div>
                                                          </div>
                                                       </td>
                                                       <td colSpan={3}>
                                                           Lucknow, Uttar Pradesh, IN
                                                           <br/>
                                                           <small>2409:4063:4202:8ad5:902c:bf99:9fc9:6873</small>
                                                       </td>
                                                       <td colSpan={3}>
                                                           May 25, 2022 01:15 PM
                                                           <br/>
                                                           <small>11 M</small>
                                                       </td>
                                                       <td >
                                                           <a className="log_out">Logout</a>
                                                       </td>
                                                  </tr>
                                                 
                                              </tbody>
                                          </Table>
                                         </div>
                                         
                                       </div>
                                  </section>
  
  
  </>
  );
  }
  export default Sessionhistory 