import {Product} from './Product';
import {prepareProductCard} from './domRender';
import {ValidationError} from './ErrorHandling';
import {productJosn as jsonFormat} from './jsonFormatInterface';
fetch("../json/data.json")
    .then( (response) => response.json())
    .catch(() => alert("Please check your connection"))
    .then( jsonArr => {
        let products = new Set();
        jsonArr?.products.forEach((object: jsonFormat) => products.add(prepareProductObject(object)));
        return products;
    })
    .then( (products) => {
        products.forEach((product)  =>  prepareProductCard(product));
    })
    .catch( () => alert("Unable to get prducts, please try again"));   
    

let prepareProductObject = (jsonObj: jsonFormat) => {
    let name, img, price;
    
    name = jsonObj?.name ?? "No Name";
    img = jsonObj?.imgUrl ?? "No Image";
    price = jsonObj?.price ?? 0;
    return new Product(name, img, price);

};


//submit form
function addNewProduct(){
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    (<HTMLInputElement>document.getElementById("name")).value='';
    if(validateForm(name)){
        let product = new Product(name);
        prepareProductCard(product);
    } 
}

let button : HTMLInputElement | null = document.querySelector('input[type="button"]');
button?.addEventListener('click', addNewProduct);
let validateForm = (name : string) => {
    try {
        if(!name || name == '')
            throw new ValidationError("Enter Name");
        else if(!name.match(/^[A-Za-z]*[A-Za-z ]*$/)){
            throw new ValidationError("ENter valid Name");
        }
        else 
            return true;
    } catch (error) {
        alert(error.message);        
    }
};
