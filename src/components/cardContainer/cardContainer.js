import './cardContainer.css'
const CardContainer = ({componentToPassDown }, title) => {
    return (<>
    <div className='card-cantainer animate__animated animate__slideInLeft'>
        {componentToPassDown}
    </div>
    </>);
}

export default CardContainer;