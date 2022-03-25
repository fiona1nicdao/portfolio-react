// import images here
import foodweather from "../images/foodweather.png"
import probros from "../images/probros.png"
import polari from "../images/polari.png"

const projectdata = [
    {
        id:1,
        title: "My first project",
        website:"https://seasons-of-food.github.io/whats-your-food-temp/",
        github:"https://github.com/seasons-of-food/whats-your-food-temp",
        image:foodweather,
        description:'A website that provides the weather and a corresponding recipe depending on the temperature of the city enter.',
    },
    {
        id:2,
        title:"My Second project",
        webiste:"https://pro-bono-pals.herokuapp.com/", 
        github:"https://github.com/pro-bono-pals/pro-bono-pals",
        image: probros,
        description:'Service to match entry level professionals willing to donate their time with local community members who needs help in their respective fields.',
    },
    {
        id:3,
        title:"My Lastest project",
        website:"https://polari-attachments.herokuapp.com/",
        github:"https://github.com/polari-2022",
        image:polari,
        description:"Polari is a dating website caterd to the LGBTQ community with an emphasis to educate users of their attachment styles."
    }
]
export default projectdata;