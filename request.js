let cheerio = require("cheerio");
let request =require("request");
//npm i request 
//for deta extracting =cheerio
request('http://www.npmjs.com/package/cheerio',cb);
function cb(error,response,html){
    if(error){
        console.log(error);
    }else {
       // console.log(html)
        dataExtract(html);
    }
}

function dataExtract(html){
    let searchTool= cheerio.load(html)
    let ele=searchTool("#readme>h1");
    let moduleName=ele.text();
    console.log(moduleName);
}