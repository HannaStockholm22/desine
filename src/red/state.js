const ADD_EMAIL = 'ADD-EMAIL';
const UPDATE_NEW_EMAIL = 'UPDATE-NEW-EMAIL';

let store = {
    _state: {
        footerPart: {
            socialData: [
                { id: 1, text: "Facebook", path: "https://www.facebook.com/", name: "facebook.svg" },
                { id: 2, text: "Instagram", path: "https://www.instagram.com/", name: "instagram.svg" },
                { id: 3, text: "Pinterest", path: "https://www.pinterest.com/", name: "pinterest.svg" },
                { id: 4, text: "WhatsApp", path: "https://web.whatsapp.com/", name: "whatsapp.svg" },
                { id: 5, text: "Youtube", path: "https://www.youtube.com/", name: "youtube.svg" }
            ],
            footMenuData: [
                { id: 1, name: "Delivery", path: '/about' },
                { id: 2, name: "FAQ", path: '/gallery' },
                { id: 3, name: "Help", path: '/blog' },
                { id: 4, name: "More About Us", path: '/contact' },
            ],
            emailData: [
                { id: 1, email: 'aaa@gmail.cam' },
            ],
            newEmailText: ''
        },
        homePage: {
            slideData: [
                {
                    id: 1,
                    name: "group1.png",
                    title: "Furniture collection"
                },

                {
                    id: 2,
                    name: "group1.png",
                    title: "Furniture collection."
                },

                {
                    id: 3,
                    name: "group1.png",
                    title: "Furniture collection.."
                },
            ],
        },
        aboutPage: {
            dialogsData: [
                { id: 1, name: "A" },
                { id: 2, name: "B" },
                { id: 3, name: "C" },
                { id: 4, name: "D" },
                { id: 5, name: "I" }
            ],
        }
    },
    _callSubscriber() {
        console.log('new state');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        let i = 1;
        if (action.type === ADD_EMAIL) {
            const newEmail = {
                id: i + 1,
                email: this._state.footerPart.emailData.email,
            }
            this._state.footerPart.emailData.push(newEmail);
            this._callSubscriber(this._state);
            this._state.footerPart.newEmailText = '';

        } else if (action.type === UPDATE_NEW_EMAIL) {
            this._state.footerPart.newEmailText = action.newText;
            this._callSubscriber(this._state);

        } else alert('Error in action');
    }



}
export const addEmailActionCreator = () => ({ type: ADD_EMAIL })
export const updateNewEmailActionCreator = (text) => ({ type: UPDATE_NEW_EMAIL, newText: text })

export default store;