import probros from "../images/probros.png"
import weather from "../images/weather.png"
import quiztimer from "../images/quiztimer.png"
import techblogs from "../images/techblogs.png"
import foodweather from "../images/foodweather.png"
import social from "../images/social.png"

const workdata = [
    {
        id:1,
        title:"ProBonoPals",
        app:"https://pro-bono-pals.herokuapp.com/", 
        github:"https://github.com/pro-bono-pals/pro-bono-pals",
        proficiency:"Model View Controller",
        imageSrc: probros,
        "img":'../../assets/images/probros.png',
        image:'probros',
    },
    {
        id:2, 
        title:"Weather Website",
        app:"https://fiona1nicdao.github.io/Homework_06/", 
        github:"https://github.com/fiona1nicdao/Homework_06",
        proficiency:"Server Side APIs",
        imageSrc: weather,
        "img":'../../assets/images/weather.png',
        image:'weather',
    },
    {
        id:3, 
        title:"Quiz Website",
        app:"https://fiona1nicdao.github.io/Homework_04/", 
        github:"https://github.com/fiona1nicdao/Homework_04",
        proficiency:"Web APIs", 
        imageSrc: quiztimer,
        "img":'../../assets/images/quiztimer.png',
        image:'quiztimer',
    },
        
    {
        id:4, 
        title:"Tech Blogs",
        app:"https://tech-blog-fionanicdao.herokuapp.com/", 
        github:"https://github.com/fiona1nicdao/Tech_Blog_MVC",
        proficiency:"SQL", 
        imageSrc: techblogs,
        "img":'../../assets/images/techblogs.png',
        image:'techblogs', 
    },
    {
        id:5, 
        title:"What's your Food Temp",
        app:"https://seasons-of-food.github.io/whats-your-food-temp/", 
        github:"https://github.com/seasons-of-food/whats-your-food-temp",
        proficiency:"Third-Party APIs", 
        imageSrc: foodweather,
        "img":'../../assets/images/foodweather.png',
        image:'foodweather',
    },
    {
        id:6, 
        title:"Social Network API",
        app:"", 
        github:"https://github.com/fiona1nicdao/social_network_api",
        proficiency:"MongoDB", 
        imageSrc: social,
        "img":'../../assets/images/social.png',
        image:'social',
    },

]
export default workdata;