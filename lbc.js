

//last ball commentry scrapping
let url="https://www.espncricinfo.com/series/sweden-in-denmark-2021-1272974/denmark-vs-sweden-3rd-t20i-1273134/ball-by-ball-commentary"
let request=require("request");
let cheerio=require("cheerio");
request(url,cb)
function cb(error,response,html){
    if(error){
        console.log(error)
    }else{
       // console.log(html);
dataExtract(html);
    }
}
function dataExtract(html){
    let searchTool=cheerio.load(html);
    let ele=searchTool(".match-comment-wrapper .match-comment-short-text");
//console.log(ele.length)
let lbc=searchTool(ele[0]).text();
console.log(lbc);
}