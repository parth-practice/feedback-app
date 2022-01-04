function Header({ title, bgColor, textColor }) {
    const headerStle = {
        backgroundColor: bgColor,
        color: textColor
    }

    return (
        <header style={headerStle}>
            <div className="container">
                <h2>{title}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

export default Header
