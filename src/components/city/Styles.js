import styled from "styled-components";
import { AiOutlineMenu } from 'react-icons/ai'

export const List = styled.ul`

`

export const Icon = styled(AiOutlineMenu)`
  color: red;
`

export const Status = styled.span`
color: ${props => props.isOnline ? 'green' : 'red'}
`