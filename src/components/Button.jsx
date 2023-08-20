

const Button = ({ label, iconUrl }) => {
    return (
        <button className="flex bg-coral-red font-montserrat border border-coral-red leading-none text-lg rounded-full py-4  justify-center gap-2 px-7 items-center text-white">
            {label}

            {iconUrl &&
                <img src={iconUrl} alt="arrow" className="ml-2 rounded-full w-5 h-5"
                />
            }
        </button>
    )
}

export default Button