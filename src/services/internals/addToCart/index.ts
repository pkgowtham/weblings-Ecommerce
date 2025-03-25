import { ActionType } from "../../../store/action.types";
import { initialState } from "../../../store/initialState";
import { Store } from "../../../store/store.types";

export const addToCartInternalReducer = (
  state: Store["addToCartInternal"] = initialState.addToCartInternal,
  action: ActionType
): any => {
  switch (action.type) {
      case "UPDATE_ADD_TO_CART_DATA": 
        return {
          ...state,
          selectedProduct: action.payload.selectedProduct,
        };
    default:
      return state;
  }
};