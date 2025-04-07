import React from "react";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from 'react-toastify';

const Tabledata = () => {
    const notify = () => toast("Data Fetched!");
  const [TableData, setTableData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("users").select();
        if (data) {
          
          setTableData(data);
          console.log(data);
        }
        if (error) throw error;
      } catch (error) {
        console.log(error);
      } finally{
        notify()
      }
    };
    fetchData();
  }, []);
  return (
<>
<ToastContainer>
</ToastContainer>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Company</th>
          <th>Address</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {TableData.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.company}</td>
              <td>{user.address}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </tbody>
    </Table></>

    
  );
};

export default Tabledata;
