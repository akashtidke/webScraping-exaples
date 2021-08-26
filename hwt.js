//higest wicket taker player name
let url="https://www.espncricinfo.com/series/sweden-in-denmark-2021-1272974/denmark-vs-sweden-3rd-t20i-1273134/full-scorecard"
let request=require("request");
let cheerio=require("cheerio");
let fs=require("fs");
request(url,cb)
function cb(error,response,html){
    if(error){
        console.log(error)
    }else{
     //   console.log(html);
     dataExtract(html);
    }


}
function dataExtract(html){
    let searchTool=cheerio.load(html);
let ele=searchTool(".table.bowler tbody tr")
// console.log("lenth table",ele.length);
// let htmldata="";
// for(let i=0;i<ele.length;i++){
// htmldata+=searchTool(ele[i]).html();
// }
// fs.writeFileSync("table.html",htmldata);
let bname="";
let hwt=0;
for(let i=0;i<ele.length;i++){
    let cols=searchTool(ele[i]).find("td");
    //console.log(cols);
    let name=searchTool(cols[0]).text();
    let wicket=searchTool(cols[4]).text();
   
    // for(let i=0;i<wicket.length;i++){
    //     console.log(wicket[i]);
    // }
    if(wicket>=hwt){
        bname=name;
        hwt=wicket;
    }

   // console.log(name+" "+ wicket);
 
   
}
console.log(bname+" "+hwt);
}
