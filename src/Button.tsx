//import {React} from 'react ';
interface Props {
buttonLable:string
className:string
}


const Button:React.FC<Props>=({className,buttonLable}) =>
{ 
  return <button className={className}>{buttonLable}</button>
     
  
}
export default Button