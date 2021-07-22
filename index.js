import Section from './Section.js';
import Card from './Card';



const handleCardClick = () => {
    
};

const createCard = (item) => {
    return new Card(item, handleCardClick);
}

const cardsList = new Section({
    items: [],
    renderer: (item) => {
        const card = createCard(item);
        return card.returnTemplate();
    }
}, '.elements');
cardsList.renderItems();