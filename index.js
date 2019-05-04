const fs = require("fs");
const path = require("path");
const md = require('markdown-it')();

module.exports = {
// funcion principal
mdLinks: function(path, options) {
  // array to return
  const result = [];
  // data from the md file
  const fileData = this.readingFile(path);
  // Array of rows from the md file
  const tokens = md.parse(fileData)[1];
  
  // Iterate the array of rows
  for(let i = 0; i < tokens.children.length; i++) {
    // store the row in the token constant
    const token = tokens.children[i];
    // Look for an opening tag: <a>
    if (token.tag == 'a' && token.type == 'link_open') {
      // If we found an openning tag the next token contains the text
      const nextToken = tokens.children[i + 1];
      const linkText = nextToken.content;

      // get the href attribute from the 'a' tag in the attrs array
      const href = token.attrs.map(
        function(attribute) {
          // the link value comes in the second element
          return attribute[1];
        }
      );
      
      // create the link object
      const linkObject = this.createLinkObject(href[0], linkText, path);
      // add the object to the result array
      result.push(linkObject);
    }
  }

  // return the promise with the array of links
  return new Promise(
    (resolve, reject) => {
      resolve(result);
  });
},

// function to create the object that will be returned in the promise array
createLinkObject: function (hrefParam, textParam, fileParam) {
  return {
    href : hrefParam,
    text : textParam,
    file : fileParam,
  }
},

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
  // To do: call validation methods(pathMd, pathDirectory,pathWorking,pathInserted)
  let file = fs.readFileSync(pathFile, "utf-8");
  return file;
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




