import './Info.css'

// eslint-disable-next-line react/prop-types
const Info = ({ number, textoNumber }) => {
    return (
        <>
        <section className='secao2'>
            <h1 className='number'>{number}</h1>
            <p className='textNumber'>{textoNumber}</p>
        </section>
            
        </>
    )
}

export default Info;