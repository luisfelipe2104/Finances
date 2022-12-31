import { Container, ContainerForms, Title, Button, ContainerButtons, ButtonLogin } from './styles.js'
import Link from 'next/link.js'

import React from 'react'

export default function Home() {
  return (
    <Container>
        <ContainerForms>
            <Title>Welcome!</Title>
            <ContainerButtons>
                <Link href={{pathname: "/register", query: {name: "Luis"}}}>
                    <Button style={{backgroundColor: 'green'}}>Register</Button>
                </Link>
                <Link href={{pathname: "/login"}}>
                    <Button style={{backgroundColor: 'blue'}}>Login</Button>
                </Link>
                <Button style={{backgroundColor: 'red'}}>Skip</Button>
            </ContainerButtons>
        </ContainerForms>
    </Container>
  )
}
