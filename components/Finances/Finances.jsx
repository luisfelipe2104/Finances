import React from 'react'
import Image from 'next/image'
import entrie from '../../assets/entrie-light.png'
import loss from '../../assets/output-light.png'
import cash from '../../assets/dollar-light.png'
import { 
    Container, 
    Header, 
    Title, 
    Section, 
    ContainerCards, 
    Card, 
    Text, 
    Price, 
    ContainerInputs,
    Input,
    Label
} from './styles'

export default function Finances() {
  return (
    <Container>
        <Header>
            <Title>Finances Manager</Title>
        </Header>
        <Section>
            <ContainerCards>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='row'>
                            <div className='col-6'>
                                <Card>
                                    <div style={{ display: 'flex', gap: "20px" }}>
                                        <Text>Gain</Text>
                                        <Image 
                                            src={entrie}
                                            style={{ height: '25px', width: '25px' }}
                                        />
                                    </div>
                                    <Price>R$ 2000.00</Price>
                                </Card>
                            </div>
                            <div className='col-6'>
                            <Card>
                                    <div style={{ display: 'flex', gap: "20px" }}>
                                        <Text>Loss</Text>
                                        <Image 
                                            src={loss}
                                            style={{ height: '25px', width: '25px' }}
                                        />
                                    </div>
                                    <Price>R$ 200000.00</Price>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                                <Card>
                                    <div style={{ display: 'flex', gap: "20px" }}>
                                        <Text>Cash</Text>
                                        <Image 
                                            src={cash}
                                            style={{ height: '25px', width: '25px' }}
                                        />
                                    </div>
                                    <Price>R$ 2000.00</Price>
                                </Card>
                    </div>
                </div>
            </ContainerCards>
            <ContainerInputs>
                <div className='row'>
                    <div className='col-lg-9'>
                        <div className='row gap-2'>
                            <div className='col-lg-5' >
                                <Label>Description</Label>
                                <Input className='w-100' />
                            </div>
                            <div className='col-lg-5' >
                                <Label>Value</Label>
                                <Input className='w-100' />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
            </ContainerInputs>
        </Section>
    </Container>
  )
}
