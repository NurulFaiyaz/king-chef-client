

const SectionBanner = ({ image, title, description }) => {
    return (
        <div
            className="hero border mb-10"
            style={{
                backgroundImage: `url(${image})`,
            }}>


            <div className="w-2/3 bg-white my-10 text-center space-y-4 p-10">
                <h1 className="text-2xl">{title}</h1>
                <p className="mb-5 text-xs">{description}
                </p>
            </div>

        </div>
    );
};

export default SectionBanner;