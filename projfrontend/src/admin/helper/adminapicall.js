import { API } from "../../backend";

export const createCategory = (userId,token,category) =>{
    return fetch(`${API}/category/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`,
        },
        body:JSON.stringify(category)
    })
    .then(response =>{
        return response.json();
    })
    .catch(err=>console.log(err));
}

//get all categories
export const getAllCategories = ()=>{
    return fetch(`${API}/categories`,{
        method:"GET"
    }).then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))

}

//products calls
export const createProduct = (userId,token,product) =>{
    return fetch(`${API}/product/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`,
        },
        body:product
    }).then(response =>{
        return response.json()
    })
    .catch(err=>console.log(err))
}
    //get all product
export const getAllProducts = ()=>{
    return fetch(`${API}/products`,{
        method:"GET"
    }).then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))

};

//delete a products
export const deleteProduct = (productId,userId,token) =>{
    return fetch(`${API}/product/${productId}/${userId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`,
        },
    }).then(response =>{
        return response.json()
    })
    .catch(err=>console.log(err))
}

//get single products
export const getproduct = productId=>{
    return fetch(`${API}/product/${productId}`,{
        method:"Get"
    }).then(response =>{
        return response.json();
    })
    .catch(err =>console.log(err));
}

//update a product
export const updateProduct = (productId,userId,token,product) =>{
    return fetch(`${API}/product/${productId}/${userId}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`,
        },
        body:product
    }).then(response =>{
        return response.json()
    })
    .catch(console.log(product))
}
