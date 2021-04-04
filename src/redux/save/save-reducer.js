import * as actionTypes from "./save-types";

const INITIAL_STATE = {
    products: [
        {
            "id": "0",
            "lat": "51.232712",
            "lng": "-0.540188",
            "imgs": ["property-1-1.jpg", "property-3-2.jpg"],
            "imgAlt": "property 1 image",
            "displayPrice": "£1,000,000",
            "price": 1000000,
            "propertyDesc": "Modern and stylish house with floor to ceiling windows to make the most of the spectacular views across the countryside. Plenty of outside space and an outdoor swimming pool.",
            "type": "detached house",
            "bedrooms": 6,
            "bathrooms": 3,
            "livingRooms": 2,
            "address": "an address, somewhere",
            "features": ["garden", "swimming pool", "underfloor heating", "cinema room", "state of the art kitchen"]
        },
        {
            "id": "1",
            "lat": "51.233130",
            "lng": "-0.592020",
            "imgs": ["property-2-1.jpg"],
            "imgAlt": "property 2 image",
            "displayPrice": "£750,000",
            "price": 750000,
            "propertyDesc": "New build semi-detached family house for sale. Close to excellent schools and transport links. Situated in a quiet cul-de-sac.",
            "type": "semi-detached house",
            "bedrooms": 5,
            "bathrooms": 2,
            "livingRooms": 1,
            "address": "an address, somewhere",
            "features": ["garden", "swimming pool", "underfloor heating", "cinema room", "state of the art kitchen"]
        },
        {
            "id": "2",
            "lat": "51.206777",
            "lng": "-0.546255",
            "imgs": ["property-3-1.jpg"],
            "imgAlt": "property 3 image",
            "displayPrice": "£600,000",
            "price": 600000,
            "propertyDesc": "Charming detached clapboard house with white picket fence. The house and wrap-around garden boast plenty of character.",
            "type": "detached house",
            "bedrooms": 3,
            "bathrooms": 2,
            "livingRooms": 1,
            "address": "an address, somewhere",
            "features": ["garden", "swimming pool", "underfloor heating", "cinema room", "state of the art kitchen"]
        }
    ],
    savedItems: [],
    currentItem: null
}

const saveReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_SAVED:
            // Get the items data from the products array
            const item = state.products.find(prod => prod.id === action.payload.id)
            // Check if the item is saved already
            const alreadySaved = state.savedItems.find(item => 
                item.id === action.payload.id ? true : false
            )
            return {
                ...state,
                savedItems: alreadySaved 
                    ? state.savedItems.map(item =>
                        item.id === action.payload.id 
                            ? {...item, qty: item.qty + 1} 
                            : item
                    ) 
                    : [...state.savedItems, {...item, qty: 1}]
            };
        case actionTypes.REMOVE_FROM_SAVED:
            return {
                ...state,
                savedItems: state.savedItems.filter(item =>
                    item.id !== action.payload.id)
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }
}

export default saveReducer;