import {useState} from 'react'
import { Box, Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { LoginUser } from "../actions/Actions";
import { useAuthDispatch } from "../actions/Context";

export default function Login(){
    const [user, setUser] = useState({
        email: "",
        password:""
    })

    const handleLogin = () => {
        console.log(user, "user")

        const submitLogin = LoginUser(dispatch, user)

        console.log(submitLogin, "submitLogin")
    }

    const dispatch = useAuthDispatch();
    return(
        <Box>
            <Heading>OLIMALL</Heading>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type='email' onChange={(e) => setUser({...user, email: e.target.value})}/>
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type='password' onChange={(e) => setUser({...user, password: e.target.value})}/>
            </FormControl>
            <FormControl>
                <Button onClick={() => handleLogin()}>Login</Button>
            </FormControl>
        </Box>
    )
}