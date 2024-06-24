import { useParams } from "react-router-dom";
import AllProducts from "../Constants/AllProducts";



const ProductContainer = () => {
    const params = useParams()
    // find method use to the products is there are not in the list of products
    const props = AllProducts.find((element) => element.id === parseInt(params.id))
    return (
        <>
            <div className="pro-card-box p-2 mt-2 mb-2 h-auto  w-screen flex flex-col items-start justify-center  shadow-2xl  ">
                <div className="list-of-items  flex flex-col w-96  justify-center relative left-10 p-4   ">
                    <h1 className="pro-head text-stone-800 w-full font-serif font-bold ... text-2xl relative left-40">{props.name}</h1>
                    <div className="img-container flex justify-center w-full relative left-20  ">
                        <img className="pro-image rounded-2xl p-2 flex" height={500} width={400} src={props.image} alt={props.name} />
                    </div>
                    <div className="details flex flex-col justify-center  w-full relative left-40 ">
                        <h3 className="pro-price p-2 mb-4 text-3xl  text-stone-600  font-serif font-bold ... text-md   ">Price Rs. <span className="price text-black  ">{props.price}</span></h3>
                        <h4 className="mb-4 text-3xl font-serif ">Discount : <span>{props.Discount}</span> %</h4>
                        <h4 className="mb-4 text-3xl font-serif" > Rating : {props.Rating}</h4>
                    </div>
                    <div>
                        {props.stock > 0 ? <div className="btns flex justify-center font-serif  mt-4 w-96 ms-20">
                            <button className="add-btn text-xl p-2 mr-2 cursor-pointer bg-green-600 hover:bg-green-800 ... rounded text-md text-gray-100 font-bold ">Buy Now</button>
                            <button className="add-btn p-2  text-xl bg-yellow-400 cursor-pointer hover:bg-yellow-600 ... rounded text-md text-gray-100 font-bold ">Add To Cart</button>
                        </div>
                            :
                            <button className="add-btn p-2 rounded text-md text-red-400 font-bold cursor-pointer  hover:bg-red-600 ... hover:text-white  ">Out Of Stock</button>
                        }
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProductContainer;