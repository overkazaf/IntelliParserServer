import Immutable from 'immutable';

const $$initState = Immutable.fromJS({
    option: {},
    evtMap: {},
});

export const componentReducer = (state = $$initState, action) => {
    switch (action.type) {
        case 'UPDATE':{
        	console.log('update', action);
        	return state;
        }
        default: return state;
    }
};
