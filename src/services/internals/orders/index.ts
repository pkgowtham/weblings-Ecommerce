import { ActionType } from "../../../store/action.types";
import { initialState } from "../../../store/initialState";
import { Store } from "../../../store/store.types";

export const orderInternalReducer = (
  state: Store["orderInternal"] = initialState.orderInternal,
  action: ActionType
): any => {
  switch (action.type) {
      case "UPDATE_ORDER_TAB": 
        return {
          ...state,
          selectTab: action.payload.selectTab,
        };
    default:
      return state;
  }
};