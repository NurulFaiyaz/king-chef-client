import { Parallax} from 'react-parallax';


const SectionBanner = ({ image, title, description }) => {
    return (

        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={image}
            bgImageAlt="the dog"
            strength={-200}
            
        >
            <div className="hero min-h-[400px] lg:min-h-[500px]">

                <div className="w-11/12 md:w-4/6 bg-black bg-opacity-40 my-20 text-center space-y-4 p-4 md:p-20 text-white">
                    <h1 className="text-3xl uppercase">{title}</h1>
                    <p className="mb-5 text-xs">{description}
                    </p>
                </div>

            </div>
        </Parallax>


    );
};

export default SectionBanner;