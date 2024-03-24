

let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
   }
let response = await fetch("http://localhost:3000/api/v1/eleve", { 
    method: "POST",
    headers: headersList
});
   
let data = await response.text();
   console.log(data);
   