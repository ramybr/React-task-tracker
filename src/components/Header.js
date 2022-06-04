import Button from './Button'

const Header = ({title}) => {
    const btnTest = () => {
        console.log('clicked')
    }

    return (
        <header className="header">
        <h1> {title} </h1>
        <Button color='#333' text='Add' onClick={btnTest} /> 
    </header>
    )
}
Header.defaultProps = {
    title : 'Task Tracker' 
}
export default Header