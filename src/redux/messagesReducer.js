const ADD_MSG = 'ADD-MSG';
const UPDATE_NEW_MSG = 'UPDATE-NEW-MSG';

export const messagesReducer = (state, action) => {
    switch(action.type){
        case ADD_MSG:
            let newMsg = {
                id: 5,
                message: state.newMsgText,
                messageOwner: "me"
            };
            state.messages.push(newMsg);
            state.newMsgText = '';
            return state;
        case  UPDATE_NEW_MSG:
            state.newMsgText = action.newText  ;
            return state;
        default:
            return state;
    }
};

export const addMsgActionCreator = () => {
    return ({type: ADD_MSG});
};
export const updateNewMsgTextActionCreator = (text) => {
    return ({type: UPDATE_NEW_MSG, newText: text});
};