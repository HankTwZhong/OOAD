import axios from 'axios';

export function getType(){
    axios.get('http://localhost:1321/type').then((result)=>{
        return result;
    })
}
