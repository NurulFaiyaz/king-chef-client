import { Helmet } from "react-helmet-async";
import SectionBanner from "../../Components/SectionTitle/SectionBanner/SectionBanner";
import OrderBanner from '../../assets/shop/banner2.jpg'
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";

import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const OrderFood = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drink']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menus] = useMenu()
    const salads = menus.filter(menu => menu.category === 'salad')
    const desserts = menus.filter(menu => menu.category === 'dessert')
    const pizzas = menus.filter(menu => menu.category === 'pizza')
    const soups = menus.filter(menu => menu.category === 'soup')
    const drinks = menus.filter(menu => menu.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>King Chef | Order Food</title>
            </Helmet>
            <div className="xl:w-9/12 mx-auto">
                <SectionBanner image={OrderBanner} title="OUR SHOP" description="WOULD YOU LIKE TO TRY A DISH?"></SectionBanner>
            </div>

            {/* Menu & Dishes */}
            <div className="w-11/12 md:max-w-5xl mx-auto my-16">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="flex justify-center mb-10">
                        <Tab>SALADS</Tab>
                        <Tab>PIZZAS</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salads}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizzas}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soups}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderFood;