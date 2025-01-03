import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SectionMenu from "../../../Components/SectionMenu/SectionMenu";


const PopularMenu = () => {

    const [menus, setMenus] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(menu => menu.category === 'popular')
                setMenus(popularMenu)
            })
    }, [])

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
                    menus.map(menu => <SectionMenu key={menu._id} menu={menu}></SectionMenu>)
                }
            </div>
            <div className="flex justify-center">
                <button className="btn btn-outline border-b-4  ">VIEW FULL MENU</button>
            </div>

        </div>
    );
};

export default PopularMenu;