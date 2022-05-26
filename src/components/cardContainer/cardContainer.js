import './cardContainer.css'

const CardContainer = ({componentToPassDown }, title) => {
    return (<>
    <div className='card-cantainer'>
        {componentToPassDown}
    </div>
    </>);
}

export default CardContainer;