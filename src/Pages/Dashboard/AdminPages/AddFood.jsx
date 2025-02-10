import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im";
import axios from "axios";
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import toast, { Toaster } from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddFood = () => {

    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        console.log(data)

        const imageFile = { image: data.image[0] }

        // Post image api
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data)

        if (res?.data?.success) {
            const menuItem = {
                name: data?.name,
                recipe: data?.recipe,
                image: res.data?.data.display_url,
                category: data?.category,
                price: parseFloat(data?.price)
            }
            // Post the data to server
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data, menuItem)
            if (menuRes.data.insertedId) {
                toast.success('Menu Added Successfully')
            }
        }

    }

    return (
        <div>
            <Helmet>
                <title>King Chef | Add Food</title>
            </Helmet>

            <SectionTitle heading='ADD AN FOOD' subHeading='My Whats New?'></SectionTitle>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="border p-10 bg-slate-200" >
                <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Food Name*
                    </label>

                    <input className=" px-4 py-2 rounded-sm" type="text" placeholder="Food Name" {...register('name', { required: true })} />
                    {errors.name && <span className="text-red-600 text-sm">This field is required</span>}

                    <div className="flex justify-between gap-8">
                        <div className="border w-full space-y-2">
                            <label >Category*</label>
                            <select className="w-full px-4 py-2" {...register('category', { required: true })}>
                                <option value="">Choose a category</option>
                                <option value="dessert">Dessert</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="drink">Drink</option>
                                <option value="soup">Soup</option>
                            </select>
                            {errors.category && <span className="text-red-600 text-sm">This field is required</span>}
                        </div>

                        <div className="border w-full space-y-2">
                            <label >Price*</label>
                            <input className="w-full px-4 py-2 rounded-sm" type="number" placeholder="Price" {...register('price', { required: true })} />
                            {errors.price && <span className="text-red-600 text-sm">This field is required</span>}
                        </div>

                    </div>

                    <label>
                        Food Recipe*
                    </label>

                    <textarea className="h-36 px-4 py-2 rounded-sm" placeholder="Recipe" {...register('recipe', { required: true })} ></textarea>

                    {errors.recipe && <span className="text-red-600 text-sm">This field is required</span>}
                    <input className=" py-2 file-input-md" type="file" {...register('image', { required: true })} />
                    {errors.image && <span className="text-red-600 text-sm">This field is required</span>}
                    <div>
                        <button type="submit" className="btn btn-sm rounded-none text-white px-4 bg-gradient-to-r from-[#835D23] to-[#B58130]">Add Item <ImSpoonKnife />
                        </button>

                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddFood;