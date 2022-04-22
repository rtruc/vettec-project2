import styled from "styled-components";
import { Icon } from "./Icon"

const SocialMediaIconDiv = styled.a`
    display: flex;
    align-items: center;
    
    padding: 0px 5px;
    height: 100%;

    transition: background-color .2s ease-out 100ms;    

    &:hover {
        background-color: rgb(235, 16, 246);
    }
`


export const SocialMediaIcon = ({ iconInfo }) => {

    return (
        <SocialMediaIconDiv href={iconInfo.link}>
            <Icon alt={iconInfo.altTxt} src={iconInfo.iconURL} />
        </SocialMediaIconDiv>
    )
}
