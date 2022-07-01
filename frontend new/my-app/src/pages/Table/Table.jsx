import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'; //In react-router-dom v6 useHistory() is replaced by useNavigate().

import ListTable from './ListTable';
import { useHttp } from '../../hooks/http-hook'


const changeData= (data) => {
    const addKeyObg = data.map((row,index)=>{
        return {
            id:index +1,
            LastName:row.LastName,
            email:row.email,
            firstName:row.firstName,
            gender:row.gender,
            status:row.status,
            nameCreate:row.nameCreate,
            _id:row._id
        }
    })
    return addKeyObg
}


function Table() {

    const {
        isLoading,
        error,
        sendRequest
    } =
    useHttp();    

    const [allRow,setAllRow]=useState(null);// all data in table
    const URL= "http://localhost:3000/api/register/table";

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const responseData = await sendRequest(URL);
            const data_from_ls_st =localStorage.setItem("list", JSON.stringify(changeData(responseData.allTable)))
            const data_from_ls_gt=(localStorage.getItem("list"))
            const all_data= JSON.parse(data_from_ls_gt)
            setAllRow(all_data)
          } catch (err) {}
        };
        fetchUsers();
      }, [sendRequest]);

    return (
        <div >
            {!isLoading && allRow && <ListTable allRow={allRow} setAllRow={setAllRow}></ListTable>}
            {error && <p className='center'> {error}</p>}
        </div>
    )
}

export default Table