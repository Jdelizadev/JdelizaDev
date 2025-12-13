
import './Blog.css'
import bkCt from '../assets/fondoCt.webp'


const Blog = () => {


    //aqui pueden ir los documentos


    return (
        <>
            <section className="blog-container">

             <p className='main-title'>Comienza a explorar</p>

             <main className='articles-container'>
             <article className='platzi-container'>
                <div className="card-container">
                    <div className='card-img-container'>
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
                    <div className='card-img-container'>
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
                    <div className='card-img-container'>
                        <img src={bkCt} alt="certificado plazti" />
                    </div>
                    <div className='text-container'>
                        <p className='card-title'>Galería de diplomas y certificados </p>
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