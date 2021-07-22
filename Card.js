export default class Card{
    constructor(data, handleCardClick){
        
        this._title = data.title;
        this._describe = data.describe;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._getView();

        this._elementImage = this._temp.querySelector('.card__image');
        this._elementImage.src = this._link;
        this._temp.querySelector('.card__title').textContent = this._title;
        this._temp.querySelector('.card__describe').textContent = this._describe;

        this._elementImage.alt = "Картинка";
        this._setEvents();
    }

    _getView(){
        this._temp = document.querySelector('#element-template').content.querySelector('.card').cloneNode(true);
        
        return this._temp;
    }

    _setEvents(){

        

        //Full-size

        
    }

    returnTemplate(){
        return this._temp;
    }
}