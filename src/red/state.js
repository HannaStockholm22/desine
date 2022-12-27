const ADD_EMAIL = 'ADD-EMAIL';
const UPDATE_NEW_EMAIL = 'UPDATE-NEW-EMAIL';
const UPDATE_BTN = 'UPDATE-BTN';


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
            collectionData: [
                {
                    id: 1,
                    name: "object1.jpg",
                    title: "Furniture collection",
                    department: "Living room furntiture.",
                    item: "Desk",
                },

                {
                    id: 2,
                    name: "object2.jpg",
                    title: "Truffaut literally trust.",
                    department: "Living room furntiture",
                    item: "Chair",
                },

                {
                    id: 3,
                    name: "object3.jpg",
                    title: "Truffaut literally trust..",
                    department: "Living room furntiture",
                    item: "Chair",
                },
                {
                    id: 4,
                    name: "object4.jpg",
                    title: "Truffaut literally trust...",
                    department: "Living room furntiture",
                    item: "Table"
                },
                {
                    id: 5,
                    name: "object5.jpg",
                    title: "Truffaut literally trust.",
                    department: "Living room furntiture",
                    item: "Sofa",
                },
            ],
            wayData: [
                {
                    id: 1,
                    name: "icon1.svg",
                    title: "Designer Consultation",
                    text: "Kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche",
                },
                {
                    id: 2,
                    name: "icon2.svg",
                    title: "Measurements",
                    text: "Intelligentsia YOLO lomobushwick coloring book.Semiotics man bun venmo viral cliche",
                },
                {
                    id: 3,
                    name: "icon3.svg",
                    title: "Production",
                    text: "Everyday carry actually neutra authentic kogi shabby chic",
                },
            ],
            inspirationData: [
                {
                    id: 1,
                    photo: "img1.jpg",
                    autor: "by Ann Summers",
                    dataPubl: ["March", "12,", 2020],
                    category: "Interior",
                    title: "Listicle actually selvage activated charcoal for the drinking vinegar "
                },
                {
                    id: 2,
                    photo: "img2.jpg",
                    autor: "by Finnagan Morningsta",
                    dataPubl: ["September", "28,", 2020],
                    category: "Dining room interiorr",
                    title: "Red selfies edison bulb four dollar toast humblebrag "
                },

            ],
            galleryData: [
                [
                    { id: 1, name: "bed/place1.jpg" },
                    { id: 2, name: "bed/place2.jpg" },
                    { id: 3, name: "bed/place3.jpg" },
                    { id: 4, name: "bed/place4.jpg" },
                    { id: 5, name: "bed/place5.jpg" },

                ],
                [
                    { id: 1, name: "liv/place1.jpg" },
                    { id: 2, name: "liv/place2.jpg" },
                    { id: 3, name: "liv/place3.jpg" },
                    { id: 4, name: "liv/place4.jpg" },
                    { id: 5, name: "liv/place5.jpg" },
                ],
                [
                    { id: 1, name: "off/place1.jpg" },
                    { id: 2, name: "off/place2.jpg" },
                    { id: 3, name: "off/place3.jpg" },
                    { id: 4, name: "off/place4.jpg" },
                    { id: 5, name: "off/place5.jpg" },

                ],
                [
                    { id: 1, name: "div/place1.jpg" },
                    { id: 2, name: "div/place2.jpg" },
                    { id: 3, name: "div/place3.jpg" },
                    { id: 4, name: "div/place4.jpg" },
                    { id: 5, name: "div/place5.jpg" },
                ],
                [
                    { id: 1, name: "cha/place1.jpg" },
                    { id: 2, name: "cha/place2.jpg" },
                    { id: 3, name: "cha/place3.jpg" },
                    { id: 4, name: "cha/place4.jpg" },
                    { id: 5, name: "cha/place5.jpg" },
                ],
            ],
            activeCategory: 1,

        },
        aboutPage: {
            dialogsData: [
                { id: 1, name: "A" },
                { id: 2, name: "B" },
                { id: 3, name: "C" },
                { id: 4, name: "D" },
                { id: 5, name: "I" }
            ],
        },
        departmentsData: [
            {
                id: 0,
                name: "Bedroom furniture",
                pic: "bed"
            },
            {
                id: 1,
                name: "Living room furniture",
                pic: "liv"
            },
            {
                id: 2,
                name: "Office furniture",
                pic: "off"
            },
            {
                id: 3,
                name: "Dining room futniture",
                pic: "div"
            },
            {
                id: 4,
                name: "Chair ",
                pic: "cha"
            },

        ],
        PathToData: [
            {
                id: 0,
                step: "/home",
                name: "Home"
            },
            {
                id: 1,
                step: "/about",
                name: "About"
            },
            {
                id: 2,
                step: "/gallery",
                name: "Gallery"
            },
            {
                id: 3,
                step: "/blog",
                name: "Blog"
            },
            {
                id: 4,
                step: "/contact",
                name: "Contact"
            }
        ]
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
        console.log('in dispatch');
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

        } else if (action.type === UPDATE_BTN) {
            console.log('UPDATE_BTN');
            this._state.homePage.activeCategory = action.id;
            this._callSubscriber(this._state);
            console.log('activCateg=' + this._state.homePage.activeCategory);
        }
        else alert('Error in action');
    }



}
export const addEmailActionCreator = () => ({ type: ADD_EMAIL })
export const updateNewEmailActionCreator = (text) => ({ type: UPDATE_NEW_EMAIL, newText: text })
export const updateBtnActionCreator = (choice) => ({ type: UPDATE_BTN, id: choice })

export default store;

