import { useEffect, useState,useContext } from 'react';
import validate from './validate';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; //In react-router-dom v6 useHistory() is replaced by useNavigate().
import { AuthContext } from '../../context/auth-context';

//Manages the state of the Register- Custom input

toast.configure() //notification error form input
const useRegister = ()=>{
  const auth = useContext(AuthContext);
  const navigate = useNavigate(); // const history = useHistory();
    const URL= "http://localhost:3000/api/register/add";
    const [errors, setErrors] = useState({});
    const [isSubmit,setisSubmit]=useState(false)
    const [values,setValues]= useState({
        email:'',
        password:''
    });

    const handleChange= event =>{
        const { name, value } = event.target;
        setValues({
          ...values,
          [name]: value //[event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
      event.preventDefault();
      setErrors(validate(values))
      setisSubmit(true)
 
      //display error
        if(errors.email && !errors.password){
          toast.error(validate(values).email)
        }else if(errors.password && !errors.email){
          toast.error(validate(values).password)
        }else if(errors.email && errors.password){
          toast.error(validate(values).email)
          toast.error(validate(values).password)
        }
      };

      const addRegister = {
        email: values.email,
        password: values.password
      }

      const registerPost= async ()=>{
        const data  = await axios.post(URL, addRegister);
        auth.login(data.data._id);
        if(!data) {
          return
        }else{
          navigate('/login/add')
        }
        setValues(values.email="", values.password="")
      }
      
      useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmit){
          // axios.post(URL, addRegister)
          // .then(res => console.log(res))
          // .catch(error => console.log(error))
          registerPost()
        }
      },[errors])


return {handleChange,values,handleSubmit,errors,isSubmit,}

};

export default useRegister;