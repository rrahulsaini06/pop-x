import { useForm } from "react-hook-form"
import './Login.css';


 function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => console.log(data)


  console.log(watch("example")) // watch input value by passing the name of it


  return (
   <div className="container">
    <div className="heading">
      <h1>
      Signin to your PopX account
      </h1>
    </div>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
     <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group"> 
            <input placeholder="Enter email address " defaultValue="" {...register("example")} />
  
      </div>
< div className="form-group">
   <input placeholder="Enter password" {...register("exampleRequired", { required: true })} />
</div>

     
      {errors.exampleRequired && <span>This field is required</span>}


      <button type="submit">Login</button>
    </form> </div>
    
  )
}

export default Login;