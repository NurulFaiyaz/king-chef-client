import SectionBanner from "../../../Components/SectionTitle/SectionBanner/SectionBanner";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import chef from '../../../assets/home/chef-service.jpg'
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div className=" w-11/12 md:max-w-5xl mx-auto">
                <Category></Category>
                <SectionBanner
                    image={chef}
                    title='King Chef'
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
                ></SectionBanner>
                <PopularMenu></PopularMenu>
            </div>
            <Featured></Featured>
            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;