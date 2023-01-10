const ADD_EMAIL = 'ADD-EMAIL';
const UPDATE_NEW_EMAIL = 'UPDATE-NEW-EMAIL';
const UPDATE_BTN = 'UPDATE-BTN';

const UPDATE_NAME = 'UPDATE-NAME';
const UPDATE_EMAIL = 'UPDATE-EMAIL';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
const ADD_CONTACT = 'ADD-CONTACT';
const UPDATE_PAGE_NUMBER ='UPDATE-PAGE-NUMBER';
const UPDATE_PAGE_HEIGHT='UPDATE-PAGE-HEIGHT';


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
                    name: "home/object1.jpg",
                    title: "Furniture collection",
                    department: "Living room furntiture.",
                    item: "Desk",
                },

                {
                    id: 2,
                    name: "home/object2.jpg",
                    title: "Truffaut literally trust.",
                    department: "Living room furntiture",
                    item: "Chair",
                },

                {
                    id: 3,
                    name: "home/object3.jpg",
                    title: "Truffaut literally trust..",
                    department: "Living room furntiture",
                    item: "Chair",
                },
                {
                    id: 4,
                    name: "home/object4.jpg",
                    title: "Truffaut literally trust...",
                    department: "Living room furntiture",
                    item: "Table"
                },
                {
                    id: 5,
                    name: "home/object5.jpg",
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
                    { id: 1, name: "1/bed/place1.jpg" },
                    { id: 2, name: "1/bed/place2.jpg" },
                    { id: 3, name: "1/bed/place3.jpg" },
                    { id: 4, name: "1/bed/place4.jpg" },
                    { id: 5, name: "1/bed/place5.jpg" },

                ],
                [
                    { id: 1, name: "1/liv/place1.jpg" },
                    { id: 2, name: "1/liv/place2.jpg" },
                    { id: 3, name: "1/liv/place3.jpg" },
                    { id: 4, name: "1/liv/place4.jpg" },
                    { id: 5, name: "1/liv/place5.jpg" },
                ],
                [
                    { id: 1, name: "1/off/place1.jpg" },
                    { id: 2, name: "1/off/place2.jpg" },
                    { id: 3, name: "1/off/place3.jpg" },
                    { id: 4, name: "1/off/place4.jpg" },
                    { id: 5, name: "1/off/place5.jpg" },

                ],
                [
                    { id: 1, name: "1/div/place1.jpg" },
                    { id: 2, name: "1/div/place2.jpg" },
                    { id: 3, name: "1/div/place3.jpg" },
                    { id: 4, name: "1/div/place4.jpg" },
                    { id: 5, name: "1/div/place5.jpg" },
                ],
                [
                    { id: 1, name: "1/cha/place1.jpg" },
                    { id: 2, name: "1/cha/place2.jpg" },
                    { id: 3, name: "1/cha/place3.jpg" },
                    { id: 4, name: "1/cha/place4.jpg" },
                    { id: 5, name: "1/cha/place5.jpg" },
                ],
            ],
            activeCategory: 1,

        },
        aboutPage: {
            detailsData: [
                { id: 1, name: "Design and technical drawings", num: "80%" },
                { id: 2, name: "Measurments", num: "70%" },
                { id: 3, name: "Furniture functionality analysis", num: "75%" },
                { id: 4, name: "Interior visualization", num: "40%" },
            ],
            collectionData: [
                {
                    id: 1,
                    name: "about/photo1.jpg",
                    title: "Furniture collection",
                    department: "Living room furntiture.",
                    item: "Desk",
                    width: "350px"
                },

                {
                    id: 2,
                    name: "about/photo2.jpg",
                    title: "Truffaut literally trust.",
                    department: "Living room furntiture",
                    item: "Chair",
                    width: "350px"
                },

                {
                    id: 3,
                    name: "about/photo3.jpg",
                    title: "Truffaut literally trust..",
                    department: "Living room furntiture",
                    item: "Chair",
                    width: "350px"
                },
                {
                    id: 4,
                    name: "about/photo4.jpg",
                    title: "Truffaut literally trust...",
                    department: "Living room furntiture",
                    item: "Table",
                    width: "350px"
                },
                {
                    id: 5,
                    name: "about/photo5.jpg",
                    title: "Truffaut literally trust.",
                    department: "Living room furntiture",
                    item: "Sofa",
                    width: "350px"
                },
            ],
            logosData: [
                { id: 1, name: "logos/object1.svg", width: "350px" },
                { id: 2, name: "logos/object2.svg", width: "350px" },
                { id: 3, name: "logos/object3.svg", width: "350px" },
                { id: 4, name: "logos/object4.svg", width: "350px" },
                { id: 5, name: "logos/object5.svg", width: "350px" },
            ],
        },
        galleryPage: {
            galleryData1: [
                [
                    { id: 1, name: "2/bed/place1.jpg" },
                    { id: 2, name: "2/bed/place2.jpg" },
                    { id: 3, name: "2/bed/place3.jpg" },
                    { id: 4, name: "2/bed/place4.jpg" },
                    { id: 5, name: "2/bed/place5.jpg" },

                ],
                [
                    { id: 1, name: "2/liv/place1.jpg" },
                    { id: 2, name: "2/liv/place2.jpg" },
                    { id: 3, name: "2/liv/place3.jpg" },
                    { id: 4, name: "2/liv/place4.jpg" },
                    { id: 5, name: "2/liv/place5.jpg" },
                ],
                [
                    { id: 1, name: "2/off/place1.jpg" },
                    { id: 2, name: "2/off/place2.jpg" },
                    { id: 3, name: "2/off/place3.jpg" },
                    { id: 4, name: "2/off/place4.jpg" },
                    { id: 5, name: "2/off/place5.jpg" },

                ],
                [
                    { id: 1, name: "2/div/place1.jpg" },
                    { id: 2, name: "2/div/place2.jpg" },
                    { id: 3, name: "2/div/place3.jpg" },
                    { id: 4, name: "2/div/place4.jpg" },
                    { id: 5, name: "2/div/place5.jpg" },
                ],
                [
                    { id: 1, name: "2/cha/place1.jpg" },
                    { id: 2, name: "2/cha/place2.jpg" },
                    { id: 3, name: "2/cha/place3.jpg" },
                    { id: 4, name: "2/cha/place4.jpg" },
                    { id: 5, name: "2/cha/place5.jpg" },
                ],
            ],
            galleryData2: [
                [
                    { id: 1, name: "3/bed/place1.jpg" },
                    { id: 2, name: "3/bed/place2.jpg" },
                    { id: 3, name: "3/bed/place3.jpg" },
                    { id: 4, name: "3/bed/place4.jpg" },
                    { id: 5, name: "3/bed/place5.jpg" },

                ],
                [
                    { id: 1, name: "3/liv/place1.jpg" },
                    { id: 2, name: "3/liv/place2.jpg" },
                    { id: 3, name: "3/liv/place3.jpg" },
                    { id: 4, name: "3/liv/place4.jpg" },
                    { id: 5, name: "3/liv/place5.jpg" },
                ],
                [
                    { id: 1, name: "3/off/place1.jpg" },
                    { id: 2, name: "3/off/place2.jpg" },
                    { id: 3, name: "3/off/place3.jpg" },
                    { id: 4, name: "3/off/place4.jpg" },
                    { id: 5, name: "3/off/place5.jpg" },

                ],
                [
                    { id: 1, name: "3/div/place1.jpg" },
                    { id: 2, name: "3/div/place2.jpg" },
                    { id: 3, name: "3/div/place3.jpg" },
                    { id: 4, name: "3/div/place4.jpg" },
                    { id: 5, name: "3/div/place5.jpg" },
                ],
                [
                    { id: 1, name: "3/cha/place1.jpg" },
                    { id: 2, name: "3/cha/place2.jpg" },
                    { id: 3, name: "3/cha/place3.jpg" },
                    { id: 4, name: "3/cha/place4.jpg" },
                    { id: 5, name: "3/cha/place5.jpg" },
                ],
            ],
        },
        contactPage: {
            contactData: [
                { id: 1, name: "AAA", email: 'aaa@gmail.cam', message: "aaa1111" },
                { id: 2, name: "BBB", email: 'bbb@gmail.com', message: "bbb222" }
            ],
            newContact: {id:3,name:"",email:"",message:""},
            slideData: [
                {
                    id: 1,
                    name: "contact/object1.jpg",
                    title: "Furniture collection",
                    department: "Living room furntiture.",
                    item: "Desk",
                },

                {
                    id: 2,
                    name: "contact/object2.jpg",
                    title: "Truffaut literally trust.",
                    department: "Living room furntiture",
                    item: "Chair",
                },

                {
                    id: 3,
                    name: "contact/object3.jpg",
                    title: "Truffaut literally trust..",
                    department: "Living room furntiture",
                    item: "Chair",
                },
                {
                    id: 4,
                    name: "contact/object4.jpg",
                    title: "Truffaut literally trust...",
                    department: "Living room furntiture",
                    item: "Table"
                },
                {
                    id: 5,
                    name: "contact/object5.jpg",
                    title: "Truffaut literally trust.",
                    department: "Living room furntiture",
                    item: "Sofa",
                },
                {
                    id: 6,
                    name: "contact/object6.jpg",
                    title: "Truffaut literally trust...",
                    department: "Living room furntiture",
                    item: "Table"
                },
                {
                    id: 7,
                    name: "contact/object7.jpg",
                    title: "Truffaut literally trust.",
                    department: "Living room furntiture",
                    item: "Sofa",
                },
                {
                    id: 8,
                    name: "contact/object8.jpg",
                    title: "Truffaut literally trust...",
                    department: "Living room furntiture",
                    item: "Table"
                },
                {
                    id: 9,
                    name: "contact/object9.jpg",
                    title: "Truffaut literally trust.",
                    department: "Living room furntiture",
                    item: "Sofa",
                },
                {
                    id: 10,
                    name: "contact/object10.jpg",
                    title: "Truffaut literally trust.",
                    department: "Living room furntiture",
                    item: "Sofa",
                },
                {
                    id: 11,
                    name: "contact/object11.jpg",
                    title: "Truffaut literally trust...",
                    department: "Living room furntiture",
                    item: "Table"
                },
                {
                    id: 12,
                    name: "contact/object12.jpg",
                    title: "Truffaut literally trust.",
                    department: "Living room furntiture",
                    item: "Sofa",
                },
                {
                    id: 13,
                    name: "contact/object13.jpg",
                    title: "Truffaut literally trust...",
                    department: "Living room furntiture",
                    item: "Table"
                },
                {
                    id: 14,
                    name: "contact/object14.jpg",
                    title: "Truffaut literally trust.",
                    department: "Living room furntiture",
                    item: "Sofa",
                },
                {
                    id: 15,
                    name: "contact/object15.jpg",
                    title: "Truffaut literally trust.",
                    department: "Living room furntiture",
                    item: "Sofa",
                },
                {
                    id: 16,
                    name: "contact/object16.jpg",
                    title: "Truffaut literally trust.",
                    department: "Living room furntiture",
                    item: "Sofa",
                },
                {
                    id: 17,
                    name: "contact/object17.jpg",
                    title: "Truffaut literally trust.",
                    department: "Living room furntiture",
                    item: "Sofa",
                },
                {
                    id: 18,
                    name: "contact/object18.jpg",
                    title: "Truffaut literally trust.",
                    department: "Living room furntiture",
                    item: "Sofa",
                },
            ],
        },
        blogPage:{
            postsData: [
                {
                    id: 1,
                    photo: "img1.jpg",
                    autor: "by Ann Summers",
                    dataPubl: ["March", "12,", 2020],
                    category: "Office furniture",
                    title: "Listicle actually selvage activated charcoal for the drinking vinegar ",
                    text:"Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table."
                },
                {
                    id: 2,
                    photo: "img2.jpg",
                    autor: "by Ann Summers",
                    dataPubl: ["May", "2,", 2020],
                    category: "Dining room",
                    title: "Authentic kogi shabby chic",
                    text:""
                },
                {
                    id: 3,
                    photo: "img3.jpg",
                    autor: "by Lux Morningstar",
                    dataPubl: ["August", "12,", 2020],
                    category: "Bedroom Furniture",
                    title: "Cred selfies edison bulb four dollar toast humblebrag",
                    text:"Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table"
                },
                {
                    id: 4,
                    photo: "img4.jpg",
                    autor: "by Ann Summers",
                    dataPubl: ["August", "15,", 2020],
                    category: "Bedroom Furniture",
                    title: "Red selfies edison bulb four dollar toast humblebrag for the furniture ",
                    text:"veryday carry actually neutra authentic kogi shabby chic migas small batch craft be .Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table",
                },
                {
                    id: 5,
                    photo: "img5.jpg",
                    autor: "by Ann Summers",
                    dataPubl: ["August", "18,", 2020],
                    category: "Office furniture ",
                    title: "Red selfies edison bulb four dollar toast humblebrag for the furniture ",
                    text:"veryday carry actually neutra authentic kogi shabby chic migas small batch craft be .Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table",
                },
                {
                    id: 6,
                    photo: "img6.jpg",
                    autor: "by Finnagan Morningsta",
                    dataPubl: ["September", "28,", 2020],
                    category: "Dining room ",
                    title: "Red selfies edison bulb four dollar toast humblebrag ",
                    text:"Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table"
                },
                {
                    id: 7,
                    photo: "img7.jpg",
                    autor: "by Ann Summers",
                    dataPubl: ["September", "30,", 2020],
                    category: "Dining room",
                    title: "Semiotics fixie four dollar toast, next level woke scenester direct trade photo booth ",
                    text:"Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table."         
                },
                
            ],
            activePage:0,
            onPage:3,
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
        categorysData: [
            { id: 1 , name: "Dining room", count: 1},
            { id: 2 , name: "Office furniture", count: 12},
            { id: 3 , name: "Simple interiror design", count: 2},
            { id: 4 , name: "Design", count: 4},
            { id: 5 , name: "Bedroom furniture", count: 1}                    
        ],
        tagsData: [
            { id: 1 , name: "Dining room furniture"},
            { id: 2 , name: "Chair"},
            { id: 3 , name: "Table"},
            { id: 4 , name: "Bedroom"},
            { id: 5 , name: "Office furniture"}                    
        ],
        pageHeight: 1000,

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
        let j = 1;
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


        else if (action.type === UPDATE_NAME) {
            console.log('UPDATE_NAME');
            this._state.contactPage.newContact.name = action.newName;
            this._callSubscriber(this._state);

        }
        else if (action.type === UPDATE_EMAIL) {
            console.log('UPDATE_EMAIL');
            this._state.contactPage.newContact.email = action.newEmail;
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_MESSAGE) {
            console.log('UPDATE_MESSAGE');
            this._state.contactPage.newContact.message = action.newMessage;
            this._callSubscriber(this._state);

        }
        else if (action.type === ADD_CONTACT) {
            const newContactEl = {
                id: j + 1,
                name: this._state.contactPage.newContact.name,
                email: this._state.contactPage.newContact.email,
                message: this._state.contactPage.newContact.message,
            }
            this._state.contactPage.contactData.push(newContactEl);
            this._callSubscriber(this._state);
            this._state.contactPage.newContact.name = '';
            this._state.contactPage.newContact.email = '';
            this._state.contactPage.newContact.message = '';
        }
        else if (action.type === UPDATE_PAGE_NUMBER) {
            this._state.blogPage.activePage = action.id;
            this._callSubscriber(this._state);
           
        }
        else if (action.type === UPDATE_PAGE_HEIGHT) {
            this._state.pageHeight = action.height;
            this._callSubscriber(this._state);
           
        }
        else alert('Error in action');
    }



}
export const addEmailActionCreator = () => ({ type: ADD_EMAIL })
export const updateNewEmailActionCreator = (text) => ({ type: UPDATE_NEW_EMAIL, newText: text })
export const updateBtnActionCreator = (choice) => ({ type: UPDATE_BTN, id: choice })

export const updateEmailActionCreator = (text) => ({ type: UPDATE_EMAIL, newEmail: text })
export const updateNameActionCreator = (text) => ({ type: UPDATE_NAME, newName: text })
export const updateMessageActionCreator = (text) => ({ type: UPDATE_MESSAGE, newMessage: text })
export const addContactActionCreator = () => ({ type: ADD_CONTACT })

export const updatePageNumberActionCreator=(choice)=>({ type: UPDATE_PAGE_NUMBER, id: choice })
export const updatePageHeightActionCreator=(num)=>({type: UPDATE_PAGE_HEIGHT, height:num})



export default store;

