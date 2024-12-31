function Card({title, text, classes, children}){
 return <div className={classes}>
    <div className="card-title">
    {title}
    </div>
    <div className='card-text'>
    {text}{children}
    </div>
 </div>
}

export default Card;