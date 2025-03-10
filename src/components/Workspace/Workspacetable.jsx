import { React, useEffect, useState } from "react";
import axios from "axios";
import Row from "./parts/Row";
import Column from "./parts/Column";
import { notify } from "../../utils/services";
// import { forwardRef, useImperativeHandle , ref , refW , rowRef , columnSort , setColSort  }from "react";

function Workspacetable(props) {
  const [total_rows, setTotal_rows] = useState(props.group_data.total_rows ?? 1);
  const [rows, setRows] = useState([]);
  const [new_rows, setNewRows] = useState([]);

  const user_data = props.user_data;
  const workspace_id = props.workspace_id;
  const group_id = props.group_id;

  // const total_rows = props.group_data.total_rows??1;
  console.log("props.searchKey", props.searchKey)
  // const tableCallback = (cb) => {
  //   return cb();
  // };
// function to filter rows data as per searchbar 
  function filterBySearch(arr) {
    alert("filter called")
    return arr.filter(function (obj) 
    {
      // console.log(obj.name,"obj.name")
      // return obj.name === obj.name.includes(props.searchKey);
      return Object.keys(obj).some(function (key) {
        return obj[key] == obj[key].includes(props.searchKey);
      })
    });
   
  }
  useEffect(() => {
    let dt = "";
    axios
    .get(process.env.REACT_APP_LOCAL_API + "/cells/list/" + props.workspace_id + "/" + props.group_data.id + "/0", {
      "Content-Type": "application/json",
    })
    .then((res) => {
      let cellData = res.data;

      let newRow = 1;
      if(cellData.length == 0)
        newRow = 1;
      else
        newRow = parseInt(cellData[cellData.length-1].row_id)+1;
      setNewRows(newRow);
      
      if(props.searchKey.length){
        alert("come under condition")
        var filterdData = filterBySearch(cellData)
        setRows(cellData);
        console.log(filterBySearch(cellData))
      }else{
        setRows(cellData);
      }
    
      
      console.log({ filterdData })
      console.log({ cellData })
    });
  }, []);

  const addNewRow = () => {
    let new_total_rows = parseInt(total_rows)+1;
    setTotal_rows(new_total_rows);
    axios
    .put(
      process.env.REACT_APP_LOCAL_API + "/group/" + group_id,
      {
        total_rows: parseInt(new_total_rows),
        user_id: user_data.id,
        workspace_id: workspace_id,
        isActive: 1,
      },
      {
        "Content-Type": "application/json",
      }
    )
    .then((data) => {
      axios
        .post(
          process.env.REACT_APP_LOCAL_API + "/cells/save",
          {
            name: "",
            user_id: user_data.id,
            workspace_id: workspace_id,
            group_id: group_id,
            column_id: 0,
            row_id: new_rows,
            isRow: true,
            isActive: true,
          },
          {
            "Content-Type": "application/json",
          }
        )
        .then((data) => {
          // notify("Successfully updated", "success");
          // props.setReload(true);
        });

      // localStorage.setItem("rows" + group_id, parseInt(total_rows) + 1);
   
    });
  };
  const deleteNewRow = () => {
    let new_total_rows = parseInt(total_rows)-1;
    setTotal_rows(new_total_rows);
    axios
    .put(
      process.env.REACT_APP_LOCAL_API + "/group/" + group_id,
      {
        total_rows: parseInt(new_total_rows),
        user_id: user_data.id,
        workspace_id: workspace_id,
        isActive: 1,
      },
      {
        "Content-Type": "application/json",
      }
    )
      .then((data) => {
        total_rows = (total_rows>0)?parseInt(total_rows) - 1:0;
        props.setReload(true);
      });
  };

  //   ref={refW}
  //   const Workspacetable=forwardRef((props, ref)=> {

  //      const [columnSort, setColSort] = useState("Asc");

  //       },[columnSort]);

  //  useImperativeHandle(ref, () => ({  doSort(s) { setColSort(s) }}), [ ])

  //   const doSort = (s) => {
  //     refW.current.doSort(s);
  //   };
  return (
    <>
      <div className="overflow-scroll1 penicillium-section ">
      <Column
          workspace_id={workspace_id}
          group_id={group_id}
          group_data={props.group_data}
          user_data={user_data}
          columns={props.columns}
          add={props.add}
          setReload={props.setReload}
          gid={props.gid}
          searchKey={props.searchKey}
        />
        {/* <Column
          workspace_id={workspace_id}
          group_id={group_id}
          group_data={props.group_data}
          user_data={user_data}
          columns={props.columns}
          add={props.add}
          gid={props.gid}
        /> */}

        {/* <Column
          workspace_id={workspace_id}
          group_id={group_id}
          group_data={props.group_data}
          user_data={user_data}
          columns={props.columns}
        /> */}
        <div id="sortable">
          {/* {columnSort=="Desc"?rows.map((row, i) => {
            return (
            <Row  ref={rowRef} key={i} id={row.row_id} workspace_id={workspace_id} deleteNewRow={deleteNewRow} group_data={props.group_data} user_data={user_data} reload={props.reload}/>
            )
          }).reverse():rows.map((row, i) => {
            return (
            <Row  ref={rowRef} key={i} id={row.row_id} workspace_id={workspace_id} deleteNewRow={deleteNewRow} group_data={props.group_data} user_data={user_data} reload={props.reload}/>
            )
          })} */}
          {console.log({ rows })}
          {rows.map((row, i) => {
          
            return (
              <Row
                key={i}
                id={row.row_id}
                workspace_id={workspace_id}
                deleteNewRow={deleteNewRow}
                group_data={props.group_data}
                columns={props.columns}
                user_data={user_data}
                searchKey={props.searchKey}
                reload={props.setReload}
              />
            );
          })}


          {/* {rows.map((row, i) => {
            return (
              <Row
                key={i}
                id={row.row_id}
                workspace_id={workspace_id}
                deleteNewRow={deleteNewRow}
                group_data={props.group_data}
                user_data={user_data}
                columns={props.columns}
              />
            );
          })} */}
        </div>

        <a onClick={addNewRow} className="plus-left">
          <i className="fa fa-plus-circle"></i>
        </a>
      </div>
    </>
  );
}
export default Workspacetable;
