import { Product } from "./Product";

export let prepareProductCard = (object : any) => {
    let mainDiv = document.getElementById("savedProducts");
    if(mainDiv){
        let div = createElement("div");
        div.className = "col-3 custom-card";
        div.appendChild(prepareNameImgDiv(object));
         div.appendChild(preparePriceDiv(object));
         mainDiv.appendChild(div);
    }
 }; 
 
 let createElement = (element :string) => document.createElement(element);
 
 function prepareNameImgDiv(object : Product){
     let outerDiv = createElement("div");
     let nameDIv = createElement("div");
 
     let img = createElement("IMG");
     img.setAttribute("src", object.image);
 
     nameDIv.innerHTML = object.name;
     outerDiv.appendChild(nameDIv);
     outerDiv.appendChild(img);
     return outerDiv;
 }
 
 function preparePriceDiv(object : Product){
     let priceDiv = createElement("div");
     priceDiv.innerHTML = object.price as unknown as string;
 
     return priceDiv;
 }
 