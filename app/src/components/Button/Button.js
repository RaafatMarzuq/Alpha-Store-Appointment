import './style.css'

const Button = ({id,href,buttonName ,onClick}) =>{
   return (
        <div  >
        <button  className="button"  onClick={onClick} type="button"  >{buttonName}</button>
        </div>
        )
}

export default Button;