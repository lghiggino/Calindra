import Layout from "../components/Layout"

export default function about({children}){
    return(
        <Layout>
            <section className="blue-bg">
                <h2> hello from about us</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, voluptates? Rerum minus error nobis blanditiis incidunt maiores doloremque recusandae maxime!</p>
            </section>
        </Layout>
        
    )
}