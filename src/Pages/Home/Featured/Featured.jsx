import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="hero lg:w-9/12 bg-fixed mx-auto mb-10 text-white"
            style={{
                backgroundImage: `url(${featured})`,
            }}>
            <div className="bg-black bg-opacity-40">
                <div className="w-9/12 mx-auto my-10">
                    <SectionTitle
                        subHeading="Check it out"
                        heading="FROM OUR MENU"
                    >
                    </SectionTitle>
                    <div className="md:flex gap-8 items-center">
                        <img src={featured} className="md:w-1/2" alt="" />
                        <div className="space-y-1">
                            <p className="text-xs">March 20, 2023</p>
                            <h4 className="">WHERE CAN I GET SOME?</h4>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className="btn btn-outline border-t-0 border-l-0 border-r-0 border-b-4 text-white">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;