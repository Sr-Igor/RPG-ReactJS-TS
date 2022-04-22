import styled from "styled-components";

export const Container = styled.div<{size: number, left: number, top: number, sidePos: number}>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    background-image: url('assets/char.png');
    background-position: 0px ${props => props.sidePos}px;
`