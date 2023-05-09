import { FormControl, FormGroup, Input, InputLabel, Typography, styled } from "@mui/material";
import { useState } from "react";

import {addUser} from '../service/api';








const Container = styled(FormGroup)`


width: 50%;
margin: 5% auto 0 auto;

& > div {
    margin-top: 20-px
}

`

const defaultValue ={
    name: "",
    username: "",
    email: "",
    phone: "",
}

const AddUser =() =>{

const  [user, SetUser] = useState (defaultValue);
    const onValueChange =(e,) =>
    {

        SetUser({...user, [e.target.name]: e.target.value});
       
    }
    const addUserDetials = async()=>{


       await addUser(user);



    }
return ( 
    <Container>
       <Typography variant="h4">Add User</Typography>
       <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='name'/>
        
       </FormControl>

       <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='username' />
        
       </FormControl>

       <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='email' />
        
       </FormControl>

       <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='phone' />
        <FormControl>
            <button variant="Contained" onClick={()=> addUserDetials()}>ADD USER</button>
        </FormControl>
       </FormControl>





    </Container>

);
}


export default AddUser;