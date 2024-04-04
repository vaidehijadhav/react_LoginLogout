import React from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from  "react-icons/ai";

const LoginForm = ()=>{
    const [formData, setFormData]= useState({
        email: "", password:" " 
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event){
        setFormData ((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
return (
    <form>
        <label>
            <p>
                Email Address<sup>*</sup>
            </p>

            <input 
            required type='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter Email id'
            name='email'
        />
        </label>

        <label>
            <p>
                Password<sup>*</sup>
            </p>

            <input 
            required type= {showPassword ? ("text"):("password")}
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter Password'
            name='password'
        />

        <span onClick={()=> setShowPassword((prev)=> !prev )}>
            {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>) }
        </span>

        <Link to="#">
            <p>Forgot Password</p>
        </Link>
        </label>

        <button>
            Sign In
        </button>
        
    </form>
)
}

export default  LoginForm; 
