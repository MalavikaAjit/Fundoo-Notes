import axios from "axios";
export function registration(){
    const url = "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp";
    const data = {
       "firstName":'malavika',
       "lastName": 'ajit',
       "email": "jhdb@gmail.com",
       "service": "advance",
       "password": "jsbfvjhdbf"
    }
    const config = {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': localStorage.getItem('token')
        }
    };
   axios.post(url , data ,config)
   .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     });
   }
