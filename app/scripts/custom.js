import {nom1} from './_sub';


function __A() {
    return(async () => {
        let t = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1); 
            } ,3000)
        });
        return t;      
    })()
   
}

__A().then(data => {
    //halo 
    console.log('111'),console.log(data1)   
})



var itemPrice = '{{ settings.free_price_text }}'; 
console.log(nom1);    

