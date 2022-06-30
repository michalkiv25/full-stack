import React from 'react';

import { Button } from '../../components';
import {BsFillTrashFill} from 'react-icons/bs'; //icon
import {FiEdit2} from 'react-icons/fi';//icon
import E from './ItemTable.style';


function ItemTable({
  itemRow,
  allRow,
  setAllRow,
  setmodalEdit,
  setObgRowTable,
  setfetch_api
}) {

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
      let person = window.confirm("Are you sure you want to delete the line?");
      if(person){
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
            <E.Td>
              <Button icon onClick={() => edit(itemRow.id)}>
                <FiEdit2></FiEdit2>
              </Button>
              <Button icon onClick={() => hendeleDelete(itemRow._id)}>
                <BsFillTrashFill></BsFillTrashFill>
              </Button>
            </E.Td>
          </tr>
    </React.Fragment>
  )
}

export default ItemTable