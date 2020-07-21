import constants from '../constants';
const iState = {
  createRoomData: [],
  
};
const videocall = (state = iState, action) => {
  switch (action.type) {
    case constants.SAVE_CREATE_ROOM_SUCCESS:
      return {
        ...state,
        createRoomData: action.payload,
      };

     default:
      return state;
  }
};

export default videocall;
