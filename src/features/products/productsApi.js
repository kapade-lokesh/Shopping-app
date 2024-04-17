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


export const fetchProductsByCategory= async (filter,sort)=>{

     // filter = {category:['smartphone','laptops']}
     //sort = {_sort:'price'}
     
     try{
       
         var queryString = '';

        for(var key in filter){
            let categories = filter[key];
            if(categories.length>0){
                let lastcategory = categories[categories.length-1]
                queryString +=`${key}=${lastcategory}&`
            }
          
        }
        console.log(queryString)

        for(var key in sort){
            queryString +=`${key}=${sort[key]}&`
        }

        const response = await fetch(`http://localhost:8080/products?${queryString}`)
       
        if(!response.ok)
            throw new Error('error while fetching')

            const data = await response.json()
  

            return data;
        
     }catch(err){
        console.log(err);
     }
}