
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center w-2/3 sm:w-2/6 mx-auto my-8">
            <p className="text-sm italic text-amber-500 mb-3">---{subHeading}---</p>
            <h3 className="text-xl border-y-2 py-3">{heading}</h3>
        </div>
    );
};

export default SectionTitle;