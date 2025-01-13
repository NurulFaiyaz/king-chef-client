import { Helmet } from "react-helmet-async";
import SectionBanner from "../../Components/SectionTitle/SectionBanner/SectionBanner";
import menuBanner from '../../assets/menu/banner3.jpg'
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

import salad from '../../assets/menu/salad-bg.jpg'
import pizza from '../../assets/menu/pizza-bg.jpg'
import soup from '../../assets/menu/soup-bg.jpg'
import dessert from '../../assets/menu/dessert-bg.jpeg'



const OurMenu = () => {

    const [menus] = useMenu()
    const salads = menus.filter(menu => menu.category === 'salad')
    const desserts = menus.filter(menu => menu.category === 'dessert')
    const pizzas = menus.filter(menu => menu.category === 'pizza')
    const soups = menus.filter(menu => menu.category === 'soup')
    const offered = menus.filter(menu => menu.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>King Chef | Menu</title>
            </Helmet>
            <div className="xl:w-9/12 mx-auto">
                <SectionBanner image={menuBanner} title="OUR MENU" description="WOULD YOU LIKE TO TRU A DISH"></SectionBanner>
            </div>

            {/* Offered Menu */}
            <div className="w-11/12 md:max-w-5xl mx-auto">
                <SectionTitle
                    heading="TODAY'S OFFER"
                    subHeading="Don't miss"
                >
                </SectionTitle>
                <MenuCategory items={offered}></MenuCategory>
            </div>

            {/* Desserts */}

            <div className="xl:w-9/12 mx-auto">
            <SectionBanner
                image={dessert}
                title="desserts"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></SectionBanner>
            </div>
            <div className="w-11/12 md:max-w-5xl mx-auto">
                <MenuCategory category='dessert' items={desserts}></MenuCategory>
            </div>

            {/* Pizza */}

            <div className="xl:w-9/12 mx-auto">
            <SectionBanner
                image={pizza}
                title="pizzas"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></SectionBanner>
            </div>
            <div className="w-11/12 md:max-w-5xl mx-auto">
                <MenuCategory category="pizza" items={pizzas}></MenuCategory>
            </div>

            {/* Salads */}

            <div className="xl:w-9/12 mx-auto">
            <SectionBanner
                image={salad}
                title="salads"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></SectionBanner>
            </div>
            <div className="w-11/12 md:max-w-5xl mx-auto">
                <MenuCategory category="salad" items={salads}></MenuCategory>
            </div>

            {/* Soups */}

            <div className="xl:w-9/12 mx-auto">
            <SectionBanner
                image={soup}
                title="soups"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></SectionBanner>
            </div>
            <div className="w-11/12 md:max-w-5xl mx-auto">
                <MenuCategory category="soup" items={soups}></MenuCategory>
            </div>

        </div>
    );
};

export default OurMenu;