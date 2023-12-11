const IdCard = (props) => {
    const formattedBirthDate = props.birth.toDateString();

    return (
        <div className="idCard">
            <div className="picture">
            <img src={props.picture}/>
            </div>
            <div className="info">
                <b>Last name: </b> {props.lastName}
                <br/>
                <b>First name: </b> {props.firstName}
                <br/>
                <b>Gender: </b>{props.gender}
                <br/>
                <b>Height: </b>{props.height}
                <br/>
                <b>Birth: </b>{formattedBirthDate}
            </div>
        </div>
    )
}
export default IdCard;