

const SectionMenu = ({menu}) => {
    const {name, recipe, image, price} = menu;

    return (
        <div className="flex items-center gap-2">
             <img className="w-20 rounded-full rounded-tl-none" src={image} alt="" />
            <div>
                <h3>{name} ---------------</h3>
                <p className="text-xs">{recipe}</p>
            </div>
            <p className="text-amber-600">${price}</p>
        </div>
    );
};

export default SectionMenu;