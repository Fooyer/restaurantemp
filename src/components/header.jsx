import './header.css'

export default function Header() {
    return (
        <header className='header'>
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/contato">Contato</a></li>
            </ul>
        </header>
    );
}