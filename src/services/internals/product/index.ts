import { ActionType } from "../../../store/action.types";
import { initialState } from "../../../store/initialState";
import { Store } from "../../../store/store.types";

export const productInternalReducer = (
  state: Store["productInternal"] = initialState.productInternal,
  action: ActionType
): any => {
  switch (action.type) {
      case "UPDATE_PRODUCT_TAB": 
        return {
          ...state,
          selectTab: action.payload.selectTab,
        };
    default:
      return state;
  }
};