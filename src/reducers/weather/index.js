import  {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILED,
} from '../../action';


const intialState = {
    fetching: true,
    fetched: false,
    data: [],
    errors: []
};

export default function reducer(state=intialState, action) {
    switch (action.type) {
        case FETCH_WEATHER_REQUEST:{
            return {
                ...state,
                fetching: false,
            };
        }
        case FETCH_WEATHER_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                fetched: true,
                fetching: false
            };
        }
        case FETCH_WEATHER_FAILED: {
            return {
                ...state,
                error: action.payload,
                fetched: true,
                fetching: false
            };
        }
        default: return state
    }
}