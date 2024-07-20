import random from "../function/random.js"
import copyValueCheck from "../function/copyValueCheck.js"


function createJsonData(req,res){
    let body=req.body
    let noOfCopy=Number(body.noOfCopy)
    let data=copyValueCheck(body.data)
    let jsonObjectArray=[]
    for(let i=0;i<noOfCopy;i++){

        let jsonObject={}
        for(let j in data){
            let dataType=data[j]
            let x=random(data[j])
            jsonObject[dataType]=x
          }
          
          jsonObjectArray.push(jsonObject)
    }
    
    

    res.status(200).json({data:jsonObjectArray})
    
}
export default createJsonData


