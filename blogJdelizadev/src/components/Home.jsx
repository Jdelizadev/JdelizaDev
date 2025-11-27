
import './Home.css'

const Home = () => {
    return (
        <>
            <section className="background">
                <div className='grid'>
                    <p className='text'>La tecnología <br/>
                    <span className='highlight'> te espera</span>
                    </p>

                    <div className='button-container'>
                        <button>
                            Comenzar
                        </button>
                    </div>
                    
                </div>

            </section>
        </>
    )
}

export { Home }