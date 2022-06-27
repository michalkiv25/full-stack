import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'; //In react-router-dom v6 useHistory() is replaced by useNavigate().
import axios from "axios";
import ListTable from './ListTable';


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
    const navigate = useNavigate(); // const history = useHistory();
    const [allRow,setAllRow]=useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error,setError] = useState()

    const URL= "http://localhost:3000/api/register/table";
    const tableGet= async () => {
        setIsLoading(true)
        try{
            const data  = await axios.get(URL);
            const data_from_ls_st =localStorage.setItem("list", JSON.stringify(changeData(data.data.allTable)))
            const data_from_ls_gt=(localStorage.getItem("list"))
            const all_data= JSON.parse(data_from_ls_gt)
            setAllRow(all_data)
        }catch(err){
            setError(err.message)
        }
        setIsLoading(false)
    }
    useEffect(()=>{
        tableGet()
    },[])


    return (
        <div >
            {!isLoading && <ListTable allRow={allRow} setAllRow={setAllRow}></ListTable> }
            {error && <p> {error}</p> }
        </div>
    )
}

export default Table