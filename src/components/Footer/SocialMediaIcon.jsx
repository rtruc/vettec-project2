import styled from "styled-components";
import { FooterItem } from "./FooterItem";
import { Icon } from "./Icon"

const SocialMediaIconDiv = styled.div`
    padding: 0px 5px;
    /* padding: 0px 5px; */
    transition: background-color .2s ease-out 100ms;

    

    &:hover {
        background-color: rgb(235, 16, 246);
    }
`


export const SocialMediaIcon = ({ iconInfo }) => {

    console.log(iconInfo.link);
    // console.log(iconInfo);

    return (
        // <FooterItem>
        <SocialMediaIconDiv>
            <a href={iconInfo.link}>
                <Icon alt={iconInfo.altTxt} src={iconInfo.iconURL} />
            </a>
        </SocialMediaIconDiv>

        // </FooterItem>
    )
}
