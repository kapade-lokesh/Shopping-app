// export const fetchProducts = async () =>{
//     try{
     
//      const response = await fetch('http://localhost:8080/products')

//      if(!response.ok)
//        throw new Error('error while fetching')
    
//        const data = await response.json()

//        return data;

//     }catch(err){
//         console.log(err);
//     }\
// }


export const fetchProductsByCategory= async (filter,sort,Pagination)=>{

     // filter = {category:['smartphone','laptops']}
     //sort = {_sort:'price'}
     
     try{
       
         let queryString='';

        for(var key in filter){
            let categories = filter[key];
            if(categories.length>0){
                let lastcategory = categories[categories.length-1]
                queryString +=`${key?`${key}=${lastcategory}&`:`${queryString}`}`
            }
          
        }
        
        for(var key in sort){
            queryString +=`${key}=${sort[key]}&`
        }
        
        for(var key in Pagination){
            queryString +=`${key}=${Pagination[key]}&`
        }
   
        console.log(queryString)

        const response = await fetch(`http://localhost:8080/products?${queryString}`)
         console.log(response)
        if(!response.ok)
            throw new Error('error while fetching')

            const data = await response.json()
             
            return data;
        
     }catch(err){
        console.log(err);
     }
}