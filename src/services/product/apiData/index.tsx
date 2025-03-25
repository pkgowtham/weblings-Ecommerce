import { ActionType } from "../../../store/action.types";
import { initialState } from "../../../store/initialState";
import { Store } from "../../../store/store.types";


export const productApiDataInternalReducer = (
  state: Store["productApiData"] = initialState.productApiData,
  action: ActionType
): any => {
  switch (action.type) {
    case "UPDATE_PRODUCT_BASIC_INPUT":
      return {
        ...state,
        name: action.payload.name,
        Longdesc: action.payload.Longdesc,
        shortdesc: action.payload.shortdesc,
        categoryId: action.payload.categoryId,
        subCategoryId: action.payload.subCategoryId,
        brandId: action.payload.brandId,
        tagList: action.payload.tagList,
      };
      case "UPDATE_PRODUCT_COLOR_INPUT":
      return {
        ...state,
        colorList: action.payload.colorList,
      };
      case "UPDATE_PRODUCT_SIZE_INPUT":
        return {
          ...state,
          sizeList: action.payload.sizeList,
        };
        case "UPDATE_PRODUCT_STOCK_AND_PRICE_INPUT":
        return {
          ...state,
          stocks: action.payload.stocks,
          prices: action.payload.prices,
        };
        case "ADD_PRODUCT_COLOR_ATTACHMENT_DYNAMIC_DATA":
      return {
        ...state,
        ...action.payload, 
      };
    default:
      return state;
  }
};
