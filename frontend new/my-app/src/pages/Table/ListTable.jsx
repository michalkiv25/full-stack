import React,{useState} from 'react';

import ItemTable from './ItemTable';
import '../../App.css';
import Modalsec from '../../components/Modalsec';
import { ModalMain } from '../../components';
import { Button } from './../../components';
import AddRow from '../AddRow';


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
        // setfetch_api('POST')
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
        <Button onClick={hendelOpenModal} buttonAdd>ADD ROW</Button>
        <AddRow 
            modalAddPost={modalAddPost} 
            closeMapHandler={closeMapHandler}
            fetch_api={fetch_api}
            descriptionButtonInternal={descriptionButtonInternal}
            hendelOpenModal={hendelOpenModal}
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
                onCancel={closeMapHandler}
                obgRowTable={obgRowTable} 
                fetch_api={fetch_api} 
            >
            </Modalsec>
          }
        />
    </React.Fragment>
  )
}

export default ListTable