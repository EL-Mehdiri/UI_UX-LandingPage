import { star } from "../assets/icons"


const ProductCard = ({ imgURL, name, price }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={imgURL} alt={name}
                className="w-[280px] h-[280px]" />
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="star" width={24} height={24} />
                <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
            </div>
            <h3 className="font-semibold mt-2 text-2xl leading-normal font-palanquin">{name}</h3>
            <p className="mt-2 font-semibold font-montserrat leading-normal text-coral-red text-xl">{price}</p>
        </div>
    )
}

export default ProductCard