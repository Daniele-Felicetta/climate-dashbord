
export default async function getData(){
    try{
        const data = await fetch("https://global-warming.org/api/temperature-api");
        const response= await data.json();
        return response.result;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}