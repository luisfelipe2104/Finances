import styled from "styled-components";

export const Container = styled.div `
    width: 100vw;
    min-height: 100vh;
    height: fit-content;
    background-color: #2e2e2e;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
    overflow-x: hidden;
`

export const ContainerForms = styled.div `
    height: 300px;
    width: 80%;
    max-width: 550px;
    background-color: #fff;
    border-radius: 15px;
    padding: 20px 20px;
`

export const Text = styled.p `
    font-family: 'fantasy';
    text-align: center;
    font-size: 35px;
    font-weight: bold;
`

export const Error = styled(Text)
`
    font-size: 16px;
    color: red;
    text-align: left;
`

export const ContainerInput = styled.div `
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-around;
`

export const Input = styled.input `
    font-size: 20px;
    border: 2px solid #010733;
    border-radius: 10px;
    padding: 2px 8px;
`

export const ContainerButton = styled(ContainerInput)
`
    margin-top: 0px;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button `
    background-color: #3ad666;
    border-radius: 15px;
    padding: 10px 10px;
    font-size: 25px;
`