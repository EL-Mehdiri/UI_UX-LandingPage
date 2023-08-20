

const Button = ({ label, iconUrl, backgroundColor, borderColor, textColor }) => {
    return (
        <button className={`flex  font-montserrat border  leading-none text-lg rounded-full py-4
          justify-center gap-2 px-7 items-center 
          ${backgroundColor ? `${backgroundColor} ${textColor}
          ${borderColor}` : 'bg-coral-red border-coral-red text-white'}`}>
            {label}

            {iconUrl &&
                <img src={iconUrl} alt="arrow" className="ml-2 rounded-full w-5 h-5"
                />
            }
        </button>
    )
}

export default Button