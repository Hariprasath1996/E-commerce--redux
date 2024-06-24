import AllProducts from "../Constants/AllProducts";
import ProductCard from "./ProductCard";

// this component for showing products details with their data's from allProducts
const DashBoard = () => {
    return (<>
        <div className="flex flex-wrap justify-center p-4 m-2">
{AllProducts.map((product)=><ProductCard {...product} key={product.id}/>)}
        </div>
    </>);
}

export default DashBoard;