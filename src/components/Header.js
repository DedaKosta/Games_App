import '../App.css'

const Header = (props) => {
    return (
        <header className='header'>
            <h1>Games App - {props.name}</h1>
        </header>
    )
}

export default Header
