import { Nav } from './components'
import { Hero, Footer, Offer, Products, Quality, Reviews, Services, Subscribe } from './sections'

const App = () => {
    return (
        <main className="relative">
            <Nav />
            <section className="xl:padding-l padding-b">
                <Hero />
            </section>
            <section className="padding">
                <Products />
            </section>
            <section className="padding">
                <Quality />
            </section>
            <section className="padding-x py-10">
                <Services />
            </section>
            <section className="padding">
                <Offer />
            </section>
            <section className="bg-pale-blue padding">
                <Reviews />
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
                <Subscribe />
            </section>
            <section className="bg-black padding-x padding-t pb-8">
                <Footer />
            </section>

        </main>
    )
}

export default App