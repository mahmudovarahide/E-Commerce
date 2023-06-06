import { USER_ACTION_TYPES } from "../../context/user.context";
import { createAction } from "../../utils/reducers/reducer.utils";

export const setCurrentUser = (user) => {
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
  };
