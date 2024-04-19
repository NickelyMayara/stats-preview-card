import './App.css'

import img from '../../images/image-header-desktop.jpg'
import Textos from '../Textos/Textos'
import Info from '../Info/Info'

const App = () => {
    return (
        <section className='container'>
            <div className='div1'>
                <Textos
                    title1='Get' span='insights' title2='that help' title3='your business grow.'
                    textoPrincipal='Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.'
                />
                <div className='informacoes'>
                    <Info number='10k+' textoNumber='COMPANIES' />
                    <Info number='314' textoNumber='TEMPLATES' />
                    <Info number='12M+' textoNumber='QUERIES' />
                </div>

            </div>
            <div className='div2'>
                <img src={img} alt="#" />
            </div>
        </section>
    )
}

export default App;