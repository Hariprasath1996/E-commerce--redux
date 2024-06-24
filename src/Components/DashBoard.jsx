import AllProducts from "../Constants/AllProducts";
import ProductCard from "./ProductCard";


const DashBoard = () => {
    return (<>
        <div className="flex flex-wrap justify-center p-4 m-2">
{AllProducts.map((product)=><ProductCard {...product}/>)}
        </div>
    </>);
}

export default DashBoard;