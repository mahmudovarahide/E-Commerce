import { createAction } from "../../utils/reducers/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategoriesMap = (categoriesMap) => {
  return createAction(
    CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,
    categoriesMap
  );
};
