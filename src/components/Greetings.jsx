const Greetings = (props) => {
    let greetingText='';
    switch(props.lang){
        case 'de': greetingText=`Hallo ${props.children}`;
        break;
        case 'fr': greetingText=`Bonjour ${props.children}`;
        break;
        case 'es': greetingText=`Hola ${props.children}`;
        break;
        case 'en': greetingText=`Hello ${props.children}`;
        break;
    }

    return (
        <div className="Greetings">
            {greetingText}
        </div>
    )
}
export default Greetings;