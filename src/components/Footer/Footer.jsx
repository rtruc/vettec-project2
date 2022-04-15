import styled from "styled-components";
import { FooterItem } from './FooterItem';
import { githubIcon, linkedinIcon } from "../../img/icons";
// import { FooterItemBundle } from "./FooterItemBundle";
import { SearchForm } from "../NavBar/SearchForm";


const FooterDiv = styled.div`
    display: flex;
    flex-direction: row;

    flex-wrap: nowrap;
    /* justify-content: center; */
    justify-content: space-between;
    align-items: stretch;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    /* background-color: rgba(128, 128, 128, 0.503); */
    background-color: rgba(233, 16, 246, 0.5);

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    z-index: 10;`

const IconBundleDiv = styled.div`
    display: flex;
    flex-direction: row;
`
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


    const juhContacts = <>
                            <IconBundleDiv>
                                {juhData.map((input, index) => {
                                    return (
                                        // <IconBundleDiv key={index}>
                                        <FooterItem key={index+input.iconURL} link={input.link}
                                            iconURL={input.iconURL}
                                            altTxt={input.altTxt} />
                                        // </IconBundleDiv>
                                    );
                                })}
                            </IconBundleDiv>
                        </>
    const trucContacts = <>
                            <IconBundleDiv>
                                {trucData.map((input, index) => {
                                    return (
                                        // <IconBundleDiv key={index}>
                                        <FooterItem key={index+input.iconURL} link={input.link}
                                            iconURL={input.iconURL}
                                            altTxt={input.altTxt} />
                                        // </IconBundleDiv>
                                    );
                                })}
                            </IconBundleDiv>
                        </>
    

    return (
        <>
            <FooterDiv>
                {juhContacts}
                <SearchForm />
                {trucContacts}

            </FooterDiv>
        </>
    )
}