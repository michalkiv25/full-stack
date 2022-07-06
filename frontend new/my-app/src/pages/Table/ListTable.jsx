import React,{useState} from 'react';
import { CSSTransition } from 'react-transition-group';

import ItemTable from './ItemTable';
import '../../App.css';
import Modalsec from '../../components/Modalsec';
import { ModalMain } from '../../components';
import { Button } from './../../components';


function ListTable({allRow,setAllRow}) {
    const [modalEdit,setmodalEdit] = useState(false);
    const [modalAddPost,setmodalAddPost] = useState(false);
    const [descriptionButtonInternal, setDescriptionButtonInternal]= useState('Add');
    const [fetch_api,setfetch_api]= useState('POST')

    const [obgRowTable,setObgRowTable] = useState({}) //objEdit

    if(allRow.length === 0 ){ 
        return(
            <>
                <p className='center'>No table found</p>
                <Button to="/">Share Place</Button>
            </>
        )
    }

    // all funciotn
    const hendelOpenModal= ()=>{
        setmodalAddPost(true)
        setfetch_api('POST')
    }

    const closeMapHandler = () => {
        setmodalEdit(false) 
        setmodalAddPost(false);
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
        <Button onClick={hendelOpenModal}>ADD ROW</Button>
        <ModalMain
          show={modalAddPost}
          onCancel={closeMapHandler}
          header={'Post New Row in table'}
          contentClass="modal-content"
          footerClass="modal-actions"
          footer={
            <Button inverse onClick={closeMapHandler}>CLOSE</Button>
          }
          content= {
            <Modalsec 
                fetch_api={fetch_api} 
                onCancel={closeMapHandler}
                setmodalEdit={setmodalEdit} 
                allRow={allRow} 
                setAllRow={setAllRow}
                descriptionButtonInternal={descriptionButtonInternal}>
            </Modalsec>
         }
        />
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
        <ModalMain
          show={modalEdit}
          onCancel={closeMapHandler}
          header={'Edit Row in table'}
          contentClass="modal-content"
          footerClass="modal-actions"
          footer={<Button inverse  onClick={closeMapHandler}>CLOSE</Button>}
          content= {
            <Modalsec 
                setfetch_api={'PUT'}
                obgRowTable={obgRowTable} 
                fetch_api={fetch_api} 
                setmodalEdit={setmodalEdit} 
                allRow={allRow}>
            </Modalsec>
          }
        />
    </React.Fragment>
  )
}

export default ListTable