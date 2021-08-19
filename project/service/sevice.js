
const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/";

export function registration(data){

   servicereq('#!/user/userSignUp','post',data)
  //  redirect 

}
export function signvalidate(){

}

 
  
function servicereq (url,meth,data){
  fetch(baseUrl+url, {
  method:meth,
  data: JSON.stringify(data),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  })
  .then(result => {
     return console.log('Success:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}