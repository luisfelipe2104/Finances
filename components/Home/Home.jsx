import { Container, ContainerForms, Title, Button, ContainerButtons, ButtonLogin } from './styles.js'

import React from 'react'

export default function Home() {
  return (
    <Container>
        <ContainerForms>
            <Title>Welcome!</Title>
            <ContainerButtons>
                <ButtonLogin style={{backgroundColor: 'green'}}>Register</ButtonLogin>
                <ButtonLogin style={{backgroundColor: 'blue'}}>Login</ButtonLogin>
                <ButtonLogin style={{backgroundColor: 'red'}}>Skip</ButtonLogin>
            </ContainerButtons>
        </ContainerForms>
    </Container>
  )
}
