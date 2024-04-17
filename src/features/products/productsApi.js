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


export const fetchProductsByCategory= async (filter)=>{
     try{
       
         var queryString = '';

        for(var key in filter){
            queryString +=`${key}=${filter[key]}&`
        }
        console.log(queryString)

        const response = await fetch(`http://localhost:8080/products?${queryString}`)
       
        if(!response.ok)
            throw new Error('error while fetching')

            const data = await response.json()
  

            return data;
        
     }catch(err){
        console.log(err);
     }
}