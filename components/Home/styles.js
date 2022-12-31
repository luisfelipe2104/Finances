import styled from "styled-components";
import { Container, Text, ContainerForms, Button as ButtonBase, ContainerInput } from "../index.js";

export const Title = styled(Text)`
    font-family: 'cursive';
    font-weight: bold;
    font-size: 1.8em;
`

export const ContainerButtons = styled(ContainerInput)`
    height: 80px;
    align-items: center;
    margin-top: 60px;
    gap: 20px;
`

export const Button = styled(ButtonBase)`
    padding: 10px 15px;
    font-size: 20px;
    color: white;
    min-width: 150px;
    text-align: center;
    border-radius: 25px;
`

export { Container, ContainerForms } 