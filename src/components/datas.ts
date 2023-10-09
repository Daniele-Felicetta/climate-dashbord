type Transformable = {
    [key: string]: any;
};

function dataTransform(input: Transformable,exclude:string[],target?:string ){
    const transformed=input.map((single:Transformable)=>{
        let newSingle:Transformable={}
        if(target){
            const targetTransformed=parseInt(single[target])
            newSingle[target]= targetTransformed;
        }
        for(const key in single) {
            if(key !== target && !exclude.includes(key)) {
                newSingle[key]= single[key];
            }
        }
        return newSingle;
    })
    return transformed;
}

export default async function getData(type:string){
    try{
        const data = await fetch(`https://global-warming.org/api/${type}-api`);
        const response= await data.json();
        switch(type){
            case "temperature":
                return dataTransform(response.result,[],"time")
            case "co2":
                return dataTransform(response.co2, ["month","day"])
            case "methane":
                return dataTransform(response.methane,[],"date")
            case "nitrous-oxide":
                return dataTransform(response.nitrous,[],"date")
            case"arctic":
                return dataTransform(response.arcticData,["Column1","month","data-type","hemishpere","rank"]);
            default:
                return response[type]
        }
    }
    catch(err){
        console.log(err);
        throw err;
    }
}