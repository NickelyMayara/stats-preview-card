import './Textos.css'

// eslint-disable-next-line react/prop-types
const Textos = ({ title1, span, title2, title3, textoPrincipal}) => {
    return (
        <>
                <h1 className='titulo'>{title1} <span className='span'>{span}</span> {title2}</h1>
                <h1 className='titulo'>{title3}</h1>
                <p className='textoPrincipal'>{textoPrincipal}</p>
        </>
    )
}

export default Textos;