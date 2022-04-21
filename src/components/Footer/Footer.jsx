import styled from "styled-components";
import { FooterItem } from './FooterItem';
import { githubIcon, linkedinIcon } from "../../img/icons";
import { SearchForm } from "../NavBar/SearchForm";
import { IconBundle } from "./IconBundle";
import { Icon } from "./Icon";
import { ListControls } from "./ListControls";
import { SocialMediaIcon } from "./SocialMediaIcon";


const FooterDiv = styled.div`
    display: flex;
    flex-direction: row;

    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: rgba(233, 16, 246, 0.5);

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    z-index: 10;`


export const Footer = () => {

    const juhData = [
        {
            link: "https://www.linkedin.com/in/juhyun-shin/",
            iconURL: linkedinIcon,
            altTxt: "LinkedIn Icon"
        },
        {
            link: "https://github.com/JoJoTwice",
            iconURL: githubIcon,
            altTxt: "Github Icon"
        }
    ];

    const trucData = [
        {
            link: "https://github.com/rtruc/",
            iconURL: githubIcon,
            altTxt: "Github Icon"
        },
        {
            link: "https://www.linkedin.com/in/richard-truchanowicz/",
            iconURL: linkedinIcon,
            altTxt: "LinkedIn Icon"
        }
    ];


    return (
        <FooterDiv>

            <IconBundle>
                <SocialMediaIcon iconInfo={juhData[0]} />
                <SocialMediaIcon iconInfo={juhData[1]} />
            </IconBundle>

            {/* <SearchForm /> */}
            <ListControls />

            <IconBundle>
                <SocialMediaIcon iconInfo={trucData[0]} />
                <SocialMediaIcon iconInfo={trucData[1]} />
            </IconBundle>

        </FooterDiv>
    )
}