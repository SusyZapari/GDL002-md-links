const fs = require("fs");
const path = require("path");
module.exports = {
//funcion que verifica si el campo esta vacio
pathInserted: function(pathFile){
  if(pathFile == undefined){
    console.log("false");
    return false;
  }
  else{
    return true;
  } 
},
//función para saber si la ruta existe
pathWorking: function(pathFile){
  if(fs.existsSync(pathFile)){
    console.log("true");
    return true;
  }
    else{
      console.log("false");
      return false;
    }
    },
//función para verificar si la ruta es un directorio
pathDirectory: function(pathFile){
  if(fs.statSync(pathFile).isDirectory()){
    return true;
  } else{
    return false;
  } 
},

//Función que revisa si es un .md
pathMd: function(pathFile){
  if (path.extname(pathFile)=== ".md") {
    return true;
  }
  else {
    return false;
}
},

//Leer el archivo
readingFile:function(pathFile) {
let file =fs.readFileSync(pathFile, "utf-8");
console.log(file);
return true;
},

// Extraer links //
//function urlify(data) {
  // console.log(txt);
  //const mdLinkRgEx = /\[(.+?)\]\(.+?\)/g;
  //const mdLinkRgEx2 = /\[(.+?)\]\((.+?)\)/;

  //let allLinks = data.match(mdLinkRgEx);
  //var htmlLinks = [];
  //for (var x in allLinks) {
    //var grpdDta = mdLinkRgEx2.exec(allLinks[x]);
    //var linkified = "<a href=\"" + grpdDta[2] + "\">" + grpdDta[1] + "<a>";
    //htmlLinks.push(linkified);
  //}
  //return htmlLinks;
};

// // Resultado de leer archivo //
// resultReadFile.then(
//   (data)=> { // On Success
//    console.log("resultado =");
//    urlify(data).forEach(link => console.log(link));
     
//   },
//   (err)=> { // On Error
//       console.error(err);
//   }
// );


// // Promesa, fx leer archivo //
// module.exports = (filePath, options) => {
//   return new Promise((resolve, reject)=> {
//     // Leer el archivo
//     fs.readFile(filePath, function(err, data){
//       if (err){
//         return reject(err);
//       }
//       resolve(data.toString());
//     });
//   });
//   };




