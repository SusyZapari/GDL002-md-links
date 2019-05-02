const mdLinks = require('../index.js');
describe('pathInserted', () => {
  it('should be a function', () => {
    expect(typeof mdLinks.pathInserted).toBe("function");
  });
  it('Should return false', () => {
    expect(mdLinks.pathInserted()).toBe(false);
  });
  it('should return true', () => {
    expect(mdLinks.pathInserted('./README.md')).toBe(true);
      });
});
describe("pathWorking", () =>{
  it("Should be false", () => {
       expect(mdLinks.pathWorking("./README.txt")).toBe(false);
   });
   it("Should be true", () => {
     expect(mdLinks.pathWorking("./README.md")).toBe(true);
   });
    });

describe("pathDirectory", () =>{
  it("Should be true", () => {
   expect(mdLinks.pathDirectory("/Users/susydev/Documents/LABORATORIA/PROYECTOS/GDL002-md-links")).toBe(true);
   });
  it("Should be false", () => {
   expect(mdLinks.pathDirectory("./README.md")).toBe(false);
   });
  });
   
   describe("pathMd", () => {
    it("Should be true", () => {
    expect(mdLinks.pathMd("./README.md")).toBe(true);
    });describe("urlify", () =>{
  it("Should be true", ()=> {
    expect(mdLinks.urlify("./README.md")).toBe(htmlLinks);
  });
});
    it("Should be false", () => {
    expect(mdLinks.pathMd("./README.txt")).toBe(false);
    });
    });

    describe("readingFile",()=> {
      it("Should read the file", ()=>{
        expect(mdLinks.readingFile("./prueba.md")).toBe(true);
   });
  }); 
  // describe("urlify", () =>{
  //   it("Should be true", ()=> {
  //     expect(mdLinks.urlify("./README.md")).toBe(htmlLinks);
  //   });
  // });