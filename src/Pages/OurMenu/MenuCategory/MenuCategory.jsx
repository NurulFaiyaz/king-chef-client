import { Link } from "react-router-dom";
import SectionMenu from "../../../Components/SectionMenu/SectionMenu";



const MenuCategory = ({ items, category }) => {
    return (
        <div>
            <div className="my-10">
               
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    {
                        items.map(menu => <SectionMenu key={menu._id} menu={menu}></SectionMenu>)
                    }
                </div>
                <div className="flex justify-center ">
                    <Link to={`/order-food/${category}`}>
                        <button className="btn btn-outline border-b-4 border-t-0 border-l-0 border-r-0 ">ORDER YOUR FAVOURITE FOOD</button></Link>
                </div>

            </div>

        </div>
    );
};

export default MenuCategory;