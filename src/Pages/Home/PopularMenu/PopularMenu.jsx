
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SectionMenu from "../../../Components/SectionMenu/SectionMenu";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {


    const [menus] = useMenu()
    const popular = menus.filter(menu => menu.category === 'popular')

    return (
        <div className="my-10">
            <section>
                <SectionTitle
                    heading="Check it out"
                    subHeading="FROM OUR MENU"
                >
                </SectionTitle>
            </section>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
                {
                    popular.map(menu => <SectionMenu key={menu._id} menu={menu}></SectionMenu>)
                }
            </div>
            <div className="flex justify-center">
                <Link to='/menu'>
                    <button className="btn btn-outline border-b-4 border-t-0 border-l-0 border-r-0">VIEW FULL MENU</button></Link>
            </div>

        </div>
    );
};

export default PopularMenu;