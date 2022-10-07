import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
    return (
        <div className='card'>

            <div className='card--picture_container'>
                <img className='card--picture' src={props.imageUrl} />
            </div>

            <div className='card--data'>

                <div className='card--data--location'>
                    <FontAwesomeIcon icon={faLocationDot} className='card--data--location--icon' />
                    <p className='card--data--location--country'>{props.location.toUpperCase()}</p>
                    <a className='card--data--location--link' href={props.googleMapsUrl} target='_blank'>View on Google Maps</a>
                </div>

                <h1 className='card--data--title'>{props.title}</h1>
                <p className='card--data--dates'>{props.startDate} - {props.endDate}</p>
                <p className='card--data--description'>{props.description}</p>

            </div>
        </div>
    )
}

export default Card