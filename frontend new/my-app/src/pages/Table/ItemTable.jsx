import React from 'react';
import {BsFillTrashFill} from 'react-icons/bs'; //icon
import {FiEdit2} from 'react-icons/fi';//icon

function ItemTable({itemRow,allRow,setAllRow,setmodalEdit,setObgRowTable,setfetch_api}) {

      // All function
    const edit = (itemId)=>{
      let token= localStorage.getItem('token');
      let editDate= allRow.find((item)=>{
          return item.id === itemId
      })
      setmodalEdit(true)
      setObgRowTable(editDate)
      setfetch_api('PUT')
    }

    const hendeleDelete = (itemId)=>{
        let token= localStorage.getItem('token');
        let person = prompt("Are you sure you want to delete the line? If so, write 'Yes' otherwise 'No'");
        if(person === 'Yes' ){
            let newAllRow = allRow.filter(row => row._id !== itemId )
            setAllRow(newAllRow)
            const deleteRow = async (rowtableId)=>{
            const URL= `http://localhost:3000/api/register/table/${rowtableId}`
            const response = await fetch(URL, {
                method: 'DELETE',
                headers: {
                    'x-auth-token': token
                }
            })
              const responseData = await response.json()
              if(!response.ok){
                throw new Error(responseData.message)
              }
            }
            deleteRow(itemId)
        }
    }
    
  return (
    <React.Fragment>
          <tr>
                <td scope="row">{itemRow.firstName}</td>
                <td>{itemRow.LastName}</td>
                <td>{itemRow.email}</td>
                <td>{itemRow.gender}</td>
                <td>{itemRow.status}</td>
                <td>
                <img src={itemRow.image} alt={itemRow.firstName}></img>
                </td>        
                <td>
                <button onClick={() => edit(itemRow.id)}><FiEdit2></FiEdit2></button>
                <button onClick={()=> hendeleDelete(itemRow._id)}><BsFillTrashFill></BsFillTrashFill></button>
                 </td>
                 </tr>
    </React.Fragment>
  )
}

export default ItemTable