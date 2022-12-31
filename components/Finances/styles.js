import styled from "styled-components";
import { Container as ContainerBase } from "../index.js";

export const Container = styled(ContainerBase)`
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

export const Header = styled.div`
    width: 100vw;
    height: 4em;
    display: flex;
    background-color: #42f590;
`

export const Title = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
    padding-top: 25px;
    width: 100%;
`

export const Section = styled.div`
    width: 90%;
    max-width:800px;
    height: 500px;
`

export const ContainerCards = styled.div`
    margin-top: -50px;
`

export const Card = styled.div`
    width: 100%;
    height: 100px;
    background-color: #3d3d3d;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding-top: 10px;
`

export const ContainerInputs = styled(Card)`
    flex-direction: row;
    gap: 20px;
    height: fit-content;
    padding: 20px 20px;
`

export const Input = styled.input`
    height: 30px;
    border-radius: 10px;
    background-color: #4d4d4d;
    /* margin-left: 5px; */
`
export const Text = styled.p`
    color: #fff;
    font-size: 0.6em;
    font-weight: 500;
`

export const Label = styled(Text)`
    margin-bottom: -6px;
    font-size: 0.5em;
    font-weight: 400;
`

export const Price = styled(Text)`
    font-weight: 800;
`
