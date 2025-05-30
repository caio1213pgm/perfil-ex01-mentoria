

function Button({stack}: {stack: string}){
    return (
        <button className="bg-greenBtn py-2.5 px-5 rounded-3xl hover:bg-green-200 transition-all duration-200">
            {stack}
        </button>
    )
}
export default Button;