import {useState} from 'react'
function getImage(){
    const [image, setImage] = useState('sunrise')
    const pickImage = (element) => {
        setImage(element)
    }
    const imageSwitch = (image) =>{
        switch(image){
            case 'sunrise':
                return SunrisePic;
                break;
            case 'probros':
                return ProbrosPic;
                break;
        }
    }
}