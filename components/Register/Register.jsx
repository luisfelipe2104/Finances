import { useState } from "react"
import { Container, Text, ContainerForms, ContainerInput, Input, Button, ContainerButton, Error } from "./styles"
import axios from "axios"

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:3000/api/user/create", {email: username, password: password})
      .then(res => console.log(res))
    } catch (err) {
      const error = err.response.data.msg
      setError(error)
    }
  }

  return (
    <>
      <Container>
        <ContainerForms>
          <Text>Register</Text>
          <ContainerInput>
            <Input onChange={(e) => setUsername(e.target.value)} type='text' placeholder="Username..." />
            <Input onChange={(e) => setPassword(e.target.value)} type='password' placeholder="Password..." />
            { error && <Error>{error}</Error> }
          </ContainerInput>
          <ContainerButton>
            <Button onClick={handleSubmit}>Register</Button>
          </ContainerButton>
        </ContainerForms>
      </Container>
    </>
  )
}
