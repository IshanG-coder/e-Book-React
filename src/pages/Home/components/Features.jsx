import { useEffect, useState } from "react"
import { ProductCard } from "../../../components/Elements/ProductCard"
import { toast } from "react-toastify";
import { getFeaturedList } from "../../../services/productService";


export const Features = () => {
   
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    async function fetchProducts(){
      // const response = await fetch("http://localhost:8000/featured_products");
      try{
           const data = await getFeaturedList();
           setProducts(data);
      }catch(error){
       toast.error(error.message,{closeButton: true, position:"bottom-center"});
      }
    }
    fetchProducts();
    
  },[])

  return (
       <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
        <div className="flex flex-wrap justify-center lg:flex-row">
            {products.map((product)=>(
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </section>
  )
}

