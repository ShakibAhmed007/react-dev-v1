function getFormattedUserName(name: String) {
    return <h1> Dear , {name} </h1>;
}

function getMultilineElement(name: String) {
    const index = 0;
    /**
     * Use () while children element is needed
     */
    return (
        <h2 className="heading" tabIndex={index}>
            Dear, {name}
            <span> Hello World </span>
        </h2>
    );
}

function getGreeting(name: String) {
    if (name) {
        return <h2 className="heading">Hello, {name}</h2>;
    }
    return <h2 className="heading">Hello Stranger !!!</h2>;
}

function getUser() {
    const user = {
        firstName: 'Shakib',
        lastName: 'Ahmed',
    };
    return <p> Hello Dear {`${user.firstName} ${user.lastName}`} !!!</p>;
}

function App() {
    const name = 'Shakib';
    const imgSrc = 'logo192.png';

    const element = (
        <div>
            {getFormattedUserName(name)} {getMultilineElement(name)} {getGreeting(null)} {getUser()}
            <img src={imgSrc} alt="bla" />
        </div>
    );
    return element;
}

export default App;
