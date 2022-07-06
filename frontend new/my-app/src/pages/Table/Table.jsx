import React,{useEffect, useState} from 'react';

import ListTable from './ListTable';
import { useHttp } from '../../hooks/http-hook'
import { LoadingSpinner, ModalError } from '../../components';


const changeData= (data) => {
    const addKeyObg = data.map((row,index)=>{
        return {
            id:index +1,
            LastName:row.LastName,
            email:row.email,
            firstName:row.firstName,
            gender:row.gender,
            status:row.status,
            image:row.image,
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
        sendRequest,
        clearError
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
        <div>
            <ModalError error={error} onClear={clearError} />
            {!isLoading && allRow && <ListTable allRow={allRow} setAllRow={setAllRow}></ListTable>}
            {isLoading && (<div className="center"><LoadingSpinner/></div>)}
            {/* {error && <p className='center'> {error}</p>} */}
        </div>
    )
}

export default Table