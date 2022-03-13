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
        description:'Service to match entry level professionals willing to donate their time with local community members who needs help in their respective fields.',
    },
    {
        id:2, 
        title:"Weather Website",
        app:"https://fiona1nicdao.github.io/weather/", 
        github:"https://github.com/fiona1nicdao/weather",
        proficiency:"Server Side APIs",
        imageSrc: weather,
        description:'Weather dashboard site that shows the weather outlook for multiple cities and for one city the five day future forecast',
    },
    {
        id:3, 
        title:"Quiz Website",
        app:"https://fiona1nicdao.github.io/timed-quiz/", 
        github:"https://github.com/fiona1nicdao/timed-quiz",
        proficiency:"Web APIs", 
        imageSrc: quiztimer,
        description:'A website with a timed quiz on JavaScript fundamentals that stores high scores',
    },
        
    {
        id:4, 
        title:"Tech Blogs",
        app:"https://tech-blog-fionanicdao.herokuapp.com/", 
        github:"https://github.com/fiona1nicdao/Tech_Blog_MVC",
        proficiency:"SQL", 
        imageSrc: techblogs,
        description:'Tech blog site that logged in users can publish articles, blog posts, and comment their opinions.', 
    },
    {
        id:5, 
        title:"What's your Food Temp",
        app:"https://seasons-of-food.github.io/whats-your-food-temp/", 
        github:"https://github.com/seasons-of-food/whats-your-food-temp",
        proficiency:"Third-Party APIs", 
        imageSrc: foodweather,
        description:'A website that provides the weather and a corresponding recipe depending on the temperature of the city enter.',
    },
    {
        id:6, 
        title:"Social Network API",
        app:"", 
        github:"https://github.com/fiona1nicdao/social_network_api",
        proficiency:"MongoDB", 
        imageSrc: social,
        description:'Backend code - API that uses a MongoDB database for a social network data',
    },

]
export default workdata;