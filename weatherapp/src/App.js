import axios from 'axios';
import React from 'react';
import Container from './component/Container';
import Input from './component/Input';
import './assets/style.css';

const App = () =>{
    const [tempObj, setTempObj] = React.useState({});
    const api = {
      //  baseURL : "http://api.openweathermap.org/data/2.5/weather",
        baseURL : "/home",
        key : "995af56703c54a0fbfb4baae77c4fda2"
    }
    const onKeyPress = (val) =>{
        //axios.get(`${api.baseURL}?q=${val}&APPID=${api.key}&units=metric`)
        axios.post('http://localhost:5000/weather', {'city':val})
        .then(res=>{
            if(res.status == 200)
                console.log(res.data)
                setTempObj({
                    temp : res.data.temp,
                    country: res.data.country,
                    city:res.data.city
                })
        })
    }
    return(<div className={tempObj.temp>10?'app-warm':'app-cold'}>
        <Input 
            onKeyPress = {onKeyPress}
        />
        <Container 
            tempObj = {tempObj}
        />
    </div>);
}
export default App;
