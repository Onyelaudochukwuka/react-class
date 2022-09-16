const Card = ({firstName, lastName, Date: date, userName, ...props}) => {

    return ( 
        <div>
            <p>firstName: {firstName}</p>
            <p>lastNAme: {lastName}</p>
            <p>date: {new Date(date).getDate}</p>
            <p>{ userName }</p>
        </div>
     );
}
 
export default Card;