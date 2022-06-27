import React,{useRef} from 'react';
// import from project
import E from './Modal.style';

function Modal({setmodalEdit,allRow,descriptionButtonInternal,fetch_api,obgRowTable}) {
    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const gender = useRef();
    const status = useRef();
    const img = useRef();
    const nameCreate = useRef();
    console.log(obgRowTable)

    const addUserHandler =async (event)=>{
        event.preventDefault();
        const  enteredFirstName = firstName.current.value;
        const  enteredLastName = lastName.current.value;
        const  enteredEmail = email.current.value;
        const  enteredGender = gender.current.value;
        const  enteredStatus = status.current.value;
        // const  enteredImg = img.current.value;

        const allrowEdit= {
            firstName: enteredFirstName,
            LastName: enteredLastName,
            email: enteredEmail,
            gender: enteredGender,
            status: enteredStatus,
            nameCreate: allRow[0].nameCreate._id
            // image: enteredImg
        }
        const URL = `http://localhost:3000/api/register/table/${allRow[0].nameCreate._id}` //Edit
        const URLPost = `http://localhost:3000/api/register/table` //New-Post


        const fetchApi = async (URL, method) => {
            let token =  localStorage.getItem('token');
            console.log(allrowEdit)
            const response = await fetch(URL, {
                method: method,
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(allrowEdit),
              })
              const responseData = await response.json()
              if(!response.ok){
                throw new Error(responseData.message)
              }
        }

        if (fetch_api === 'PUT'){
            fetchApi(URL, 'PUT')
        } else {
            fetchApi(URLPost, 'POST')
        }

        firstName.current.value= "";
        lastName.current.value="";
        email.current.value= "";
        gender.current.value= "";
        status.current.value= "";
        img.current.value= "";
        setmodalEdit(false)
    }

  return (
        <E.Root onSubmit={addUserHandler}>
            <E.Input 
                placeholder={obgRowTable === undefined ? '' : obgRowTable.firstName}
                type='text' 
                ref={firstName}
                name="firstName">
            </E.Input>
            <E.Input
                placeholder={obgRowTable === undefined ? '' : obgRowTable.LastName}
                type='text' 
                ref={lastName}
                name="lastName"
            ></E.Input>
            <E.Input
                placeholder={obgRowTable === undefined ? '' : obgRowTable.email}
                type='email' 
                ref={email}
                name="email"
            ></E.Input>
            <E.Input
                placeholder={obgRowTable === undefined ? '' : obgRowTable.gender}
                type='text' 
                ref={gender}
                name="gender"
            ></E.Input>
            <E.Input
                placeholder={obgRowTable === undefined ? '' : obgRowTable.status}
                type='text' 
                ref={status}
                name="status"
            ></E.Input>
            <E.Input
                type='file' 
                ref={img}
                name="img"
            ></E.Input>
            <E.Button type="submit">{descriptionButtonInternal}</E.Button>
        </E.Root>
  )
}

export default Modal;