import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/Navbar";
import useFavicon from "../hooks/useFavicon";
import useDocumentTitle from "../hooks/useTitle";

const Contato = () =>{
    useDocumentTitle("Contato")
    useFavicon("https://cdn.icon-icons.com/icons2/1863/PNG/512/person_118819.png")
    
    return(
        <div>
            <NavBar/>

            <Footer />
        </div>
    )
}

export default Contato;