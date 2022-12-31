import React from 'react'
import Image from 'next/image'
import { 
    Container, 
    Header, 
    Title, 
    Section, 
} from './styles'
import Cards from '../Cards/Cards'
import Inputs from '../Inputs/Inputs'

export default function Finances() {
  return (
    <Container>
        <Header>
            <Title>Finances Manager</Title>
        </Header>
        <Section>
            <Cards />
            <Inputs />
        </Section>
    </Container>
  )
}
