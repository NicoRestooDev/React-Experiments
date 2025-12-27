export default function User({name}){
    return (
        <div>
            <img className='avatar' src={`https://unavatar.io/@${name}`} />
            <h2> Hello @{name}</h2>
        </div>
    )
}