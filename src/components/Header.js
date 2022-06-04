import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    

    return (
        <header className="header">
        <h1> {title} </h1>
        <Button  color='rgb(39, 122, 190)' text={showAdd ? 'Close' : 'Add'} onClick={onAdd} /> 
    </header>
    )
}
Header.defaultProps = {
    title : 'Task Tracker' 
}
export default Header