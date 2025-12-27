export default function MyButton({count, onClick, className}) {
    return (
    <button className={className} onClick={onClick}>Click me! {count}</button>
    )    
}