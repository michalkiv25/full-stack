import React,{useState} from 'react';
// import from project
import ItemTable from './ItemTable';
import '../../App.css';
import Modal from '../../pages/Modal';
import E from './ListTable.style';


function ListTable({allRow,setAllRow}) {
    const [modalEdit,setmodalEdit] = useState(false);
    const [modalAddPost,setmodalAddPost] = useState(false);
    const [descriptionButton,setDescriptionButton] = useState('Add Row');
    const [descriptionButtonInternal, setDescriptionButtonInternal]= useState('Post');
    const [fetch_api,setfetch_api]= useState()

    const [obgRowTable,setObgRowTable] = useState({}) //objEdit

    if(!allRow ){ // .length ===0
        return <p className='center'>No table found</p>
    }


// all funciotn
    const hendelToggle= ()=>{
        setmodalAddPost((prev)=>!prev)
        if (descriptionButton === 'Add Row'){
            setDescriptionButton('Cencel');
        }else {
            setDescriptionButton('Add Row');
        }
        setfetch_api('POST')
    }



    const list = allRow.map((itemRow,index)=>{
        return (
            <ItemTable 
                key={index} 
                itemRow={itemRow} 
                allRow={allRow} 
                setAllRow={setAllRow}
                setmodalEdit={setmodalEdit}
                setObgRowTable={setObgRowTable}
                setfetch_api={setfetch_api}
            ></ItemTable>  
        )}
    );
   
  return (
    <React.Fragment>
        <E.Root onClick={hendelToggle}>{descriptionButton}</E.Root>
        {modalAddPost &&<Modal fetch_api={fetch_api} allRow={allRow} descriptionButtonInternal={descriptionButtonInternal}></Modal>}
        <table className="table table-sm">
            <thead>
                <tr>
                    <th scope="col">First-Name</th>
                    <th scope="col">Last-Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Status</th>
                    <th scope="col">Image</th>
                    <th scope="col">Edit/Delete</th>
                </tr>
            </thead>
            <tbody>
                {list}
            </tbody>
        </table>
        {modalEdit && (<Modal obgRowTable={obgRowTable} fetch={fetch} setmodalEdit={setmodalEdit} allRow={allRow} descriptionButtonInternal={descriptionButtonInternal}></Modal>)}
    </React.Fragment>
  )
}

export default ListTable