let store = {
    _state: {
        footerPart: {  
            socialData: [
                { id: 1, text: "Facebook" },
                { id: 2, text: "Instagram" },
                { id: 3, text: "Pinterest" },
                { id: 4, text: "WhatsApp" },
                { id: 5, text: "Youtube" }
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
    getState() {
        return this._state; 
    }
}
