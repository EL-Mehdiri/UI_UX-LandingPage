

const ShoeCard = ({ imagURL, changeShow, bigShoe }) => {
    const handleClick = () => {
        if (bigShoe !== imagURL.bigShoe) {
            changeShow(imagURL.bigShoe)
        }
    }

    return (
        <div className={`border-2 rounded-xl
        ${bigShoe === imagURL.bigShoe ? 'border-coral-red' : 'border-transparent'}
        cursur-pointer max-sm:flex-1`} onClick={handleClick}>
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40
            sm:h-40 rounded-xl max-sm:p-4">
                <img src={imagURL.thumbnail} alt="collection"
                    width={127} height={103} className="object-contain" />
            </div>
        </div>
    )
}

export default ShoeCard