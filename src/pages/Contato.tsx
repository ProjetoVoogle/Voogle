import { Form, Button } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/Navbar";
import useFavicon from "../hooks/useFavicon";
import useDocumentTitle from "../hooks/useTitle";
import emailjs from "emailjs-com"; // Importando a biblioteca

const Contato = () => {
    useDocumentTitle("Contato");
    useFavicon("https://cdn.icon-icons.com/icons2/1863/PNG/512/person_118819.png");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        // Passando diretamente o formulário
        const form = event.target as HTMLFormElement;

        // Enviar o email via EmailJS
        emailjs.sendForm(
            "service_xxx", // Substitua pelo seu Service ID
            "template_xxx", // Substitua pelo seu Template ID
            form, // Passa o formulário diretamente
            "user_xxx" // Substitua pela sua chave de usuário
        )
        .then((result) => {
            console.log("Email enviado com sucesso: ", result.text);
            alert("Mensagem enviada com sucesso!");
        }, (error) => {
            console.log("Erro ao enviar o email: ", error.text);
            alert("Houve um erro ao enviar sua mensagem.");
        });
    };

    return (
        <div className="min-h-screen bg-white items-center justify-center ">
            <NavBar />

            <section className="flex justify-center m-10">
                <div className="bg-white p-8 mt-16 ">
                    <h2 className="text-center text-3xl font-semibold text-gray-700 mb-6 ">Entre em Contato</h2>
                    <Form onSubmit={handleSubmit}>
                        <div className="flex gap-5">
                            <Form.Group className="mb-4" controlId="formName">
                                <Form.Label className="text-gray-600">Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Digite seu nome"
                                    required
                                    className="p-3 border border-gray-300 rounded-md w-full"
                                />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formEmail">
                                <Form.Label className="text-gray-600">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Digite seu email"
                                    required
                                    className="p-3 border border-gray-300 rounded-md w-full"
                                />
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-4" controlId="formMessage">
                            <Form.Label className="text-gray-600">Mensagem</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Digite sua mensagem"
                                required
                                className="p-3 border border-gray-300 rounded-md w-full resize-none"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 p-3 rounded-md">
                            Enviar
                        </Button>
                    </Form>
                </div>
            </section>
            

            <Footer />
        </div>
    );
};

export default Contato;