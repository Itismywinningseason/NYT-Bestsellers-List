//const api_url ="https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=GREJXJ6zskHXW94f2UnAdRSUrGaW2xZG"
//async function getNYT (){
   // const response = await fetch (api_url);
    //const data = awaot response.json();
    //console.log(data);
//}

//getNYT();
console.log("before fetch");
//make the request
fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=GREJXJ6zskHXW94f2UnAdRSUrGaW2xZG")
.then(
    (response, error) => {
       console.log(response);
        response.json()
        .then((data, error)=>{
        return data.json();
        }).then ((objectData))=> {
            console.log (objectData[0].title);
            let tableData="";
            objectData.map((values)=> ){
                tableData= `<h1>${values.title}</h1>`;
        
            
           // body:
            //rest of code goes here because this function is the 
            //only place we have access to the json parsed data
        }) 

    });
    document.getElementById("mydata").
    innerHTML=tableData;
    
    //parse (convert) the data from the response 
    //dive into the data to get out what we want (require for loops)
    //make the data show in our html. Get element by id. 
