
import './Blog.css'
import bkCt from '../assets/fondoCt2.webp'
import CV from '../assets/CVJDL.webp'
import Proyects from '../assets/proyectos.webp'


const Blog = () => {


    //aqui pueden ir los documentos


    return (
        <>
            <section className="blog-container">

             <p className='main-title'>Bienvenid@!</p>

             <main className='articles-container'>
             <article className='platzi-container'>
                <div className="card-container">
                    <div className='card-img-container certificado'>
                        <img src={bkCt} alt="certificado plazti" />
                    </div>
                    <div className='text-container'>
                        <p className='card-title'>Galería de diplomas y certificados </p>
                        <a className='card-subtitle' href="">Navegar</a>
                    </div>
                </div>
             </article>

             <article className='platzi-container'>
                <div className="card-container">
                    <div className='card-img-container curriculum'>
                        <img src={CV} alt="certificado plazti" />
                    </div>
                    <div className='text-container'>
                        <p className='card-title'>Información personal (CV) </p>
                        <a className='card-subtitle' href="">Navegar</a>
                    </div>
                </div>
             </article>

            <article className='platzi-container'>
                <div className="card-container">
                    <div className='card-img-container curriculum'>
                        <img src={Proyects} alt="certificado plazti" />
                    </div>
                    <div className='text-container'>
                        <p className='card-title'>Otros proyectos desarrollados</p>
                        <a className='card-subtitle' href="">Navegar</a>
                    </div>
                </div>
             </article>
             <article>
                <div className="card">

                </div>
             </article>

             <article>
                <div className="card">

                </div>
             </article>
            </main>
            </section>
        </>
    )
}

export { Blog }