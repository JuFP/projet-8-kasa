
function Carousel ({pictures, title}) {
    return (
        <div className="carousel">
            <span className="arrow-left"><i className="fa-sharp fa-solid fa-chevron-left"></i></span>
            <img className="carousel__img" src={pictures} alt={title}/>
            <span className="arrow-right"><i className="fa-sharp fa-solid fa-chevron-right"></i></span>
        </div>
    );
}

export default Carousel;