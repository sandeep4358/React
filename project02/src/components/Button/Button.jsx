import styles from './Button.module.css'

// const Button = (props) => {

//     const {isOutline,icon,text} = props

//   return (
//     <button className={props.isOutline ?   styles.outline_btn : styles.primary_btn}
//     >
//         {props.icon}
//         {props.text}
//     </button>
//   )
// }


//below code we have used the destructuring of teh props adn plase the prop with the destructure object
const Button = ({isOutline,icon,text,...rest}) => {


  return (
    <button {...rest} className={isOutline ?   styles.outline_btn : styles.primary_btn}
    >
        {icon}
        {text}
    </button>
  )
}
export default Button
