
const FoodCard = ({ items }) => {

    const { name, recipe, image, price } = items;
    return (
        <div className="card bg-base-200 border rounded-none ">
            <figure>
                <img
                className="w-full"
                    src={image}
                    alt={name} />
            </figure>
            <p className="absolute right-4 top-4 px-6 py-1 bg-black text-white text-xs">{price}</p>
            <div className="card-body">
                <h2 className="text-xl font-semibold text-center">{name}</h2>
                <p className="text-sm">{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn hover:text-amber-700 btn-outline border-0 border-b-4 text-amber-700">ADD TO CARD</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;