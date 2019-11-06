export let store = {
    _state: {
        messagesPage: {
            messages: [
                {message: "Hi", messageOwner: "notMe"},
                {message: "Hey we are going to the cinema.", messageOwner: "notMe"},
                {message: "are you coming with us?", messageOwner: "notMe"},
                {message: "sorry man, I am busy today", messageOwner: "me"}
            ],
            dialogs: [
                {id: '1', name: "Стивен Роджерс"},
                {id: '2', name: "Энтони Старк"},
                {id: '3', name: "Брюс Брэннер"},
                {id: '4', name: "Наташа Романофф"},
                {id: '5', name: "Тор"},
                {id: '6', name: "Доктор Стивен Стрэндж"},
                {id: '7', name: "Грут"}
            ]
        },
        profilePage: {
            posts: [
                {message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate", like: "20"},
                {message: "I shot a new video", like: "20"},
                {message: "Hello, world!", like: "15"},
                {message: "It's my first post!", like: "2"}
            ],
            newPostText: 'ukrsalo1234'
        },
        sidebar: {
            friends:[
                {name: "Марк", photo: "https://i.guim.co.uk/img/static/sys-images/Media/Pix/pictures/2007/07/23/MarkZuckerberg128.jpg?width=300&quality=85&auto=format&fit=max&s=df3272bb0d2a7e6bc218f04737b82148"},
                {name: "Линус", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqDYyGtyO_gZASZvxUaNwHda51xeB4P-dhr6cqLJC5kDxG8m8"},
                {name: "Стив", photo: "data:image/jpeg;base64,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"}
            ]
        }
    },
    _callSubscriber() {
        console.log('State was changed. Rerender...');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if(action.type === 'UPDATE-NEW-POST') {
            this._state.profilePage.newPostText = action.newText  ;
            this._callSubscriber(this._state);
        }
    }
    
};

// export default store;
window.store = store;