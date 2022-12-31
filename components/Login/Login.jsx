import axios from 'axios'
import { Container, Text, ContainerForms, ContainerInput, Input, Button, ContainerButton, Error } from '../index.js'
import { useState } from 'react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        await axios.post("http://localhost:3000/api/user/login", {email: username, password: password})
        .then((res) => console.log(res))
        console.log(username, password)
    } catch (err) {
        console.log(username, password)
        const error = err.response.data.msg
        setError(error)
        console.log(err)
    }

  }

  return (
    <>
        <Container>
            <ContainerForms>
                <Text>Login</Text>
                <ContainerInput>
                    <Input onChange={(e) => setUsername(e.target.value)} type='text' placeholder="username..." />
                    <Input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='password...' />
                    { error && <Error>{error}</Error> }
                </ContainerInput>
                <ContainerButton>
                    <Button onClick={handleSubmit}>Login</Button>
                </ContainerButton>
            </ContainerForms>
        </Container>
    </>
  )
}
