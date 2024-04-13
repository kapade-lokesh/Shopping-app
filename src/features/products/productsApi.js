export const fetchProducts = async () =>{
    try{
     
     const response = await fetch('http://localhost:8080/products')

     if(!response.ok)
       throw new Error('error while fetching')
    
       const data = await response.json()

       return data;

       

    }catch(err){
        console.log(err);
    }
}


export const fetchProductsByCategory= async (value)=>{
     try{
      
        const response = await fetch(`https://fakestoreapi.com/products/category/${value}`)
       
        if(!response.ok)
            throw new Error('error while fetching')

            const data = await response.json()
 
             console.log(data)

            return data;
        
     }catch(err){
        console.log(err);
     }
}