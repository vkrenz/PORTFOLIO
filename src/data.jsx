import {
    PiInstagramLogoDuotone,
    PiTwitterLogoDuotone,
    PiLinkedinLogoDuotone,
    PiGithubLogoDuotone,
    PiCodepenLogoDuotone,
    PiDiscordLogoDuotone,
} from 'react-icons/pi'


const data = {
    name: "Victor Krenzel",
    description: "I'm a tech enthusiast, driven by curiosity and creativity, passionate about problem-solving and continuous learning.",
    photo: "https://i.imgur.com/zRh91Xd.png",
    contact: {
        company: "Scotiabank",
        email: "vkrenzel@outlook.com",
        phone: "647-568-6382",
        location: "Toronto",
    },
    socials: [
        {
            name: "Instagram",
            link: "https://www.instagram.com/v.krzl/",
            icon: <PiInstagramLogoDuotone />,
            handle: "@v.krzl",
        },
        {   
            name: "Twitter",
            link: "https://twitter.com/vkrenzel",
            icon: <PiTwitterLogoDuotone />,
            handle: "@vkrenzel",
        },
        {   
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/vkrenz/",
            icon: <PiLinkedinLogoDuotone />,
            handle: "in/vkrenz",
        },
        {   
            name: "Github",
            link: "https://github.com/vkrenz",
            icon: <PiGithubLogoDuotone />,
            handle: "vkrenz",
        },
        {
            name: "Codepen",
            link: "https://codepen.io/vkrenzel",
            icon: <PiCodepenLogoDuotone />,
            handle: "vkrenz",
        },
        {
            name: "Discord",
            link: "mailto:vkrenzel@outlook.com",
            icon: <PiDiscordLogoDuotone />,
            handle: "osaprocky",
        },
    ],
    projects: [
        {
            name: "Airbnb Clone",
            dateYear: "2023",
            image: "https://i.imgur.com/l5s5dGb.png",
            description:
                "A feature-rich Airbnb clone showcasing CRUD, user authentication, search filters, interactive maps, and efficient media management, highlighting my expertise in building innovative web applications.",
            link: "https://project1-link.com",
            languages: [
                "Typescript", 
                "Next.js 13", 
                "React", 
                "MongoDB", 
                "Tailwind CSS"
            ],
        },
        {
            name: "Chatalot",
            dateYear: "2022",
            image: "https://via.placeholder.com/300x300.png",
            description:
                "A dynamic web app combining style and function. With dark mode, Google login, and real-time chat via Firebase, it elevates online conversations. User security ensures privacy. Chatalot reflects my commitment to creating engaging and secure web apps.",
            link: "https://project2-link.com",
            languages: [
                "React", 
                "Tailwind CSS", 
                "Firebase"
            ],
        },
        {
            name: "EssentiaMarket",
            dateYear: "2023",
            image: "https://via.placeholder.com/300x300.png",
            description:
                "EssentiaMarket is an engaging web application built with Next.js and React, enhanced with Bootstrap. It offers seamless page navigation and dynamic data retrieval from an API, making it an intuitive and interactive platform for exploring an online marketplace.",
            link: "https://project2-link.com",
            languages: [
                "React", 
                "Next.js 13", 
                "Bootstrap"
            ],
        },
    ],
    skills: [
        {
            name: "JavaScript",
            icon: "javascript-icon",
        },
        {
            name: "React",
            icon: "react-icon",
        },
        {
            name: "HTML",
            icon: "html-icon",
        },
        {
            name: "CSS",
            icon: "css-icon",
        },
        {
            name: "Java",
            icon: "java-icon",
        },
    ],
};

export default data;
