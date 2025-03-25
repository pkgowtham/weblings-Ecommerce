import { ActionType } from "../../store/action.types";
import { initialState } from "../../store/initialState";
import { Store } from "../../store/store.types";

export const productReducer = (
  state: any = initialState.product,
  action: ActionType
): any => {
  switch (action.type) {
    case "PRODUCT_GETLIST_API_LOADING":
      return { ...state, isLoadingGetList: true,isSuccessGetList:false,isErrorGetList:false, dataGetList:null, errorGetList: null, };
    case "PRODUCT_GETLIST_API_SUCCESS":
      return { ...state, isLoadingGetList: false, isSuccessGetList:true, isErrorGetList:false, dataGetList: action.payload, errorGetList: null };
    case "PRODUCT_GETLIST_API_FAILURE":
      return { ...state, isLoadingGetList: false,isSuccessGetList:false, isErrorGetList:true, dataGetList:null, errorGetList: action.error };
    case "PRODUCT_GETLIST_API_CLEAR":
      return {...state, isLoadingGetList: false, isSuccessGetList:false, isErrorGetList:false, dataGetList:null, errorGetList:null};

      case "PRODUCT_CREATE_API_LOADING":
        return { ...state, isLoadingCreate: true,isSuccessCreate:false,isErrorCreate:false, dataCreate:null, errorCreate: null, };
      case "PRODUCT_CREATE_API_SUCCESS":
        return { ...state, isLoadingCreate: false, isSuccessCreate:true, isErrorCreate:false, dataCreate: action.payload, errorCreate: null };
      case "PRODUCT_CREATE_API_FAILURE":
        return { ...state, isLoadingCreate: false,isSuccessCreate:false, isErrorCreate:true, dataCreate:null, errorCreate: action.error };
      case "PRODUCT_CREATE_API_CLEAR":
        return {...state, isLoadingCreate: false, isSuccessCreate:false, isErrorCreate:false, dataCreate:null, errorCreate:null};

        case "PRODUCT_UPDATE_API_LOADING":
          return { ...state, isLoadingUpdate: true,isSuccessUpdate:false,isErrorUpdate:false, dataUpdate:null, errorUpdate: null, };
        case "PRODUCT_UPDATE_API_SUCCESS":
          return { ...state, isLoadingUpdate: false, isSuccessUpdate:true, isErrorUpdate:false, dataUpdate: action.payload, errorUpdate: null };
        case "PRODUCT_UPDATE_API_FAILURE":
          return { ...state, isLoadingUpdate: false,isSuccessUpdate:false, isErrorUpdate:true, dataUpdate:null, errorUpdate: action.error };
        case "PRODUCT_UPDATE_API_CLEAR":
          return {...state, isLoadingUpdate: false, isSuccessUpdate:false, isErrorUpdate:false, dataUpdate:null, errorUpdate:null};

      case "PRODUCT_GET_API_LOADING":
      return { ...state, isLoadingGet: true,isSuccessGet:false,isErrorGet:false, dataGet:null, errorGet: null, };
    case "PRODUCT_GET_API_SUCCESS":
      return { ...state, isLoadingGet: false, isSuccessGet:true, isErrorGet:false, dataGet: action.payload, errorGet: null };
    case "PRODUCT_GET_API_FAILURE":
      return { ...state, isLoadingGet: false,isSuccessGet:false, isErrorGet:true, dataGet:null, errorGet: action.error };
    case "PRODUCT_GET_API_CLEAR":
      return {...state, isLoadingGet: false, isSuccessGet:false, isErrorGet:false, dataGet:null, errorGet:null};

      case "PRODUCT_DESTROY_API_LOADING":
        return { ...state, isLoadingDestroy: true,isSuccessDestroy:false,isErrorDestroy:false, dataDestroy:null, errorDestroy: null, };
      case "PRODUCT_DESTROY_API_SUCCESS":
        return { ...state, isLoadingDestroy: false, isSuccessDestroy:true, isErrorDestroy:false, dataDestroy: action.payload, errorDestroy: null };
      case "PRODUCT_DESTROY_API_FAILURE":
        return { ...state, isLoadingDestroy: false,isSuccessDestroy:false, isErrorDestroy:true, dataDestroy:null, errorDestroy: action.error };
      case "PRODUCT_DESTROY_API_CLEAR":
        return {...state, isLoadingDestroy: false, isSuccessDestroy:false, isErrorDestroy:false, dataDestroy:null, errorDestroy:null};

    //BASIC
    case "PRODUCT_BASIC_CREATE_API_LOADING":
      return { ...state, isLoadingBasicCreate: true,isSuccessBasicCreate:false,isErrorBasicCreate:false, dataBasicCreate:null, errorBasicCreate: null, };
    case "PRODUCT_BASIC_CREATE_API_SUCCESS":
      return { ...state, isLoadingBasicCreate: false, isSuccessBasicCreate:true, isErrorBasicCreate:false, dataBasicCreate: action.payload, errorBasicCreate: null };
    case "PRODUCT_BASIC_CREATE_API_FAILURE":
      return { ...state, isLoadingBasicCreate: false,isSuccessBasicCreate:false, isErrorBasicCreate:true, dataBasicCreate:null, errorBasicCreate: action.error };
    case "PRODUCT_BASIC_CREATE_API_CLEAR":
      return {...state, isLoadingBasicCreate: false, isSuccessBasicCreate:false, isErrorBasicCreate:false, dataBasicCreate:null, errorBasicCreate:null};

      case "PRODUCT_BASIC_GET_API_LOADING":
        return { ...state, isLoadingBasicGet: true,isSuccessBasicGet:false,isErrorBasicGet:false, dataBasicGet:null, errorBasicGet: null, };
      case "PRODUCT_BASIC_GET_API_SUCCESS":
        return { ...state, isLoadingBasicGet: false, isSuccessBasicGet:true, isErrorBasicGet:false, dataBasicGet: action.payload, errorBasicGet: null };
      case "PRODUCT_BASIC_GET_API_FAILURE":
        return { ...state, isLoadingBasicGet: false,isSuccessBasicGet:false, isErrorBasicGet:true, dataBasicGet:null, errorBasicGet: action.error };
      case "PRODUCT_BASIC_GET_API_CLEAR":
        return {...state, isLoadingBasicGet: false, isSuccessBasicGet:false, isErrorBasicGet:false, dataBasicGet:null, errorBasicGet:null};

        case "PRODUCT_BASIC_UPDATE_API_LOADING":
          return { ...state, isLoadingBasicUpdate: true,isSuccessBasicUpdate:false,isErrorBasicUpdate:false, dataBasicUpdate:null, errorBasicUpdate: null, };
        case "PRODUCT_BASIC_UPDATE_API_SUCCESS":
          return { ...state, isLoadingBasicUpdate: false, isSuccessBasicUpdate:true, isErrorBasicUpdate:false, dataBasicUpdate: action.payload, errorBasicUpdate: null };
        case "PRODUCT_BASIC_UPDATE_API_FAILURE":
          return { ...state, isLoadingBasicUpdate: false,isSuccessBasicUpdate:false, isErrorBasicUpdate:true, dataBasicUpdate:null, errorBasicUpdate: action.error };
        case "PRODUCT_BASIC_UPDATE_API_CLEAR":
          return {...state, isLoadingBasicUpdate: false, isSuccessBasicUpdate:false, isErrorBasicUpdate:false, dataBasicUpdate:null, errorBasicUpdate:null};

    //Color
    case "PRODUCT_COLOR_CREATE_API_LOADING":
      return { ...state, isLoadingColorCreate: true,isSuccessColorCreate:false,isErrorColorCreate:false, dataColorCreate:null, errorColorCreate: null, };
    case "PRODUCT_COLOR_CREATE_API_SUCCESS":
      return { ...state, isLoadingColorCreate: false, isSuccessColorCreate:true, isErrorColorCreate:false, dataColorCreate: action.payload, errorColorCreate: null };
    case "PRODUCT_COLOR_CREATE_API_FAILURE":
      return { ...state, isLoadingColorCreate: false,isSuccessColorCreate:false, isErrorColorCreate:true, dataColorCreate:null, errorColorCreate: action.error };
    case "PRODUCT_COLOR_CREATE_API_CLEAR":
      return {...state, isLoadingColorCreate: false, isSuccessColorCreate:false, isErrorColorCreate:false, dataColorCreate:null, errorColorCreate:null};

      case "PRODUCT_COLOR_GET_API_LOADING":
        return { ...state, isLoadingColorGet: true,isSuccessColorGet:false,isErrorColorGet:false, dataColorGet:null, errorColorGet: null, };
      case "PRODUCT_COLOR_GET_API_SUCCESS":
        return { ...state, isLoadingColorGet: false, isSuccessColorGet:true, isErrorColorGet:false, dataColorGet: action.payload, errorColorGet: null };
      case "PRODUCT_COLOR_GET_API_FAILURE":
        return { ...state, isLoadingColorGet: false,isSuccessColorGet:false, isErrorColorGet:true, dataColorGet:null, errorColorGet: action.error };
      case "PRODUCT_COLOR_GET_API_CLEAR":
        return {...state, isLoadingColorGet: false, isSuccessColorGet:false, isErrorColorGet:false, dataColorGet:null, errorColorGet:null};

        case "PRODUCT_COLOR_UPDATE_API_LOADING":
          return { ...state, isLoadingColorUpdate: true,isSuccessColorUpdate:false,isErrorColorUpdate:false, dataColorUpdate:null, errorColorUpdate: null, };
        case "PRODUCT_COLOR_UPDATE_API_SUCCESS":
          return { ...state, isLoadingColorUpdate: false, isSuccessColorUpdate:true, isErrorColorUpdate:false, dataColorUpdate: action.payload, errorColorUpdate: null };
        case "PRODUCT_COLOR_UPDATE_API_FAILURE":
          return { ...state, isLoadingColorUpdate: false,isSuccessColorUpdate:false, isErrorColorUpdate:true, dataColorUpdate:null, errorColorUpdate: action.error };
        case "PRODUCT_COLOR_UPDATE_API_CLEAR":
          return {...state, isLoadingColorUpdate: false, isSuccessColorUpdate:false, isErrorColorUpdate:false, dataColorUpdate:null, errorColorUpdate:null};

    //Size
    case "PRODUCT_SIZE_CREATE_API_LOADING":
      return { ...state, isLoadingSizeCreate: true,isSuccessSizeCreate:false,isErrorSizeCreate:false, dataSizeCreate:null, errorSizeCreate: null, };
    case "PRODUCT_SIZE_CREATE_API_SUCCESS":
      return { ...state, isLoadingSizeCreate: false, isSuccessSizeCreate:true, isErrorSizeCreate:false, dataSizeCreate: action.payload, errorSizeCreate: null };
    case "PRODUCT_SIZE_CREATE_API_FAILURE":
      return { ...state, isLoadingSizeCreate: false,isSuccessSizeCreate:false, isErrorSizeCreate:true, dataSizeCreate:null, errorSizeCreate: action.error };
    case "PRODUCT_SIZE_CREATE_API_CLEAR":
      return {...state, isLoadingSizeCreate: false, isSuccessSizeCreate:false, isErrorSizeCreate:false, dataSizeCreate:null, errorSizeCreate:null};

      case "PRODUCT_SIZE_GET_API_LOADING":
        return { ...state, isLoadingSizeGet: true,isSuccessSizeGet:false,isErrorSizeGet:false, dataSizeGet:null, errorSizeGet: null, };
      case "PRODUCT_SIZE_GET_API_SUCCESS":
        return { ...state, isLoadingSizeGet: false, isSuccessSizeGet:true, isErrorSizeGet:false, dataSizeGet: action.payload, errorSizeGet: null };
      case "PRODUCT_SIZE_GET_API_FAILURE":
        return { ...state, isLoadingSizeGet: false,isSuccessSizeGet:false, isErrorSizeGet:true, dataSizeGet:null, errorSizeGet: action.error };
      case "PRODUCT_SIZE_GET_API_CLEAR":
        return {...state, isLoadingSizeGet: false, isSuccessSizeGet:false, isErrorSizeGet:false, dataSizeGet:null, errorSizeGet:null};

        case "PRODUCT_SIZE_UPDATE_API_LOADING":
      return { ...state, isLoadingSizeUpdate: true,isSuccessSizeUpdate:false,isErrorSizeUpdate:false, dataSizeUpdate:null, errorSizeUpdate: null, };
    case "PRODUCT_SIZE_UPDATE_API_SUCCESS":
      return { ...state, isLoadingSizeUpdate: false, isSuccessSizeUpdate:true, isErrorSizeUpdate:false, dataSizeUpdate: action.payload, errorSizeUpdate: null };
    case "PRODUCT_SIZE_UPDATE_API_FAILURE":
      return { ...state, isLoadingSizeUpdate: false,isSuccessSizeUpdate:false, isErrorSizeUpdate:true, dataSizeUpdate:null, errorSizeUpdate: action.error };
    case "PRODUCT_SIZE_UPDATE_API_CLEAR":
      return {...state, isLoadingSizeUpdate: false, isSuccessSizeUpdate:false, isErrorSizeUpdate:false, dataSizeUpdate:null, errorSizeUpdate:null};

    //Stock
    case "PRODUCT_STOCK_AND_PRICE_CREATE_API_LOADING":
      return { ...state, isLoadingStockCreate: true,isSuccessStockCreate:false,isErrorStockCreate:false, dataStockCreate:null, errorStockCreate: null, };
    case "PRODUCT_STOCK_AND_PRICE_CREATE_API_SUCCESS":
      return { ...state, isLoadingStockCreate: false, isSuccessStockCreate:true, isErrorStockCreate:false, dataStockCreate: action.payload, errorStockCreate: null };
    case "PRODUCT_STOCK_AND_PRICE_CREATE_API_FAILURE":
      return { ...state, isLoadingStockCreate: false,isSuccessStockCreate:false, isErrorStockCreate:true, dataStockCreate:null, errorStockCreate: action.error };
    case "PRODUCT_STOCK_AND_PRICE_CREATE_API_CLEAR":
      return {...state, isLoadingStockCreate: false, isSuccessStockCreate:false, isErrorStockCreate:false, dataStockCreate:null, errorStockCreate:null};

      case "PRODUCT_STOCK_AND_PRICE_GET_API_LOADING":
      return { ...state, isLoadingStockGet: true,isSuccessStockGet:false,isErrorStockGet:false, dataStockGet:null, errorStockGet: null, };
    case "PRODUCT_STOCK_AND_PRICE_GET_API_SUCCESS":
      return { ...state, isLoadingStockGet: false, isSuccessStockGet:true, isErrorStockGet:false, dataStockGet: action.payload, errorStockGet: null };
    case "PRODUCT_STOCK_AND_PRICE_GET_API_FAILURE":
      return { ...state, isLoadingStockGet: false,isSuccessStockGet:false, isErrorStockGet:true, dataStockGet:null, errorStockGet: action.error };
    case "PRODUCT_STOCK_AND_PRICE_GET_API_CLEAR":
      return {...state, isLoadingStockGet: false, isSuccessStockGet:false, isErrorStockGet:false, dataStockGet:null, errorStockGet:null};

      case "PRODUCT_STOCK_AND_PRICE_UPDATE_API_LOADING":
        return { ...state, isLoadingStockUpdate: true,isSuccessStockUpdate:false,isErrorStockUpdate:false, dataStockUpdate:null, errorStockUpdate: null, };
      case "PRODUCT_STOCK_AND_PRICE_UPDATE_API_SUCCESS":
        return { ...state, isLoadingStockUpdate: false, isSuccessStockUpdate:true, isErrorStockUpdate:false, dataStockUpdate: action.payload, errorStockUpdate: null };
      case "PRODUCT_STOCK_AND_PRICE_UPDATE_API_FAILURE":
        return { ...state, isLoadingStockUpdate: false,isSuccessStockUpdate:false, isErrorStockUpdate:true, dataStockUpdate:null, errorStockUpdate: action.error };
      case "PRODUCT_STOCK_AND_PRICE_UPDATE_API_CLEAR":
        return {...state, isLoadingStockUpdate: false, isSuccessStockUpdate:false, isErrorStockUpdate:false, dataStockUpdate:null, errorStockUpdate:null};

//Meta
case "PRODUCT_META_CREATE_API_LOADING":
  return { ...state, isLoadingMetaCreate: true,isSuccessMetaCreate:false,isErrorMetaCreate:false, dataMetaCreate:null, errorMetaCreate: null, };
case "PRODUCT_META_CREATE_API_SUCCESS":
  return { ...state, isLoadingMetaCreate: false, isSuccessMetaCreate:true, isErrorMetaCreate:false, dataMetaCreate: action.payload, errorMetaCreate: null };
case "PRODUCT_META_CREATE_API_FAILURE":
  return { ...state, isLoadingMetaCreate: false,isSuccessMetaCreate:false, isErrorMetaCreate:true, dataMetaCreate:null, errorMetaCreate: action.error };
case "PRODUCT_META_CREATE_API_CLEAR":
  return {...state, isLoadingMetaCreate: false, isSuccessMetaCreate:false, isErrorMetaCreate:false, dataMetaCreate:null, errorMetaCreate:null};

  case "PRODUCT_META_GET_API_LOADING":
  return { ...state, isLoadingMetaGet: true,isSuccessMetaGet:false,isErrorMetaGet:false, dataMetaGet:null, errorMetaGet: null, };
case "PRODUCT_META_GET_API_SUCCESS":
  return { ...state, isLoadingMetaGet: false, isSuccessMetaGet:true, isErrorMetaGet:false, dataMetaGet: action.payload, errorMetaGet: null };
case "PRODUCT_META_GET_API_FAILURE":
  return { ...state, isLoadingMetaGet: false,isSuccessMetaGet:false, isErrorMetaGet:true, dataMetaGet:null, errorMetaGet: action.error };
case "PRODUCT_META_GET_API_CLEAR":
  return {...state, isLoadingMetaGet: false, isSuccessMetaGet:false, isErrorMetaGet:false, dataMetaGet:null, errorMetaGet:null};

  case "PRODUCT_META_UPDATE_API_LOADING":
    return { ...state, isLoadingMetaUpdate: true,isSuccessMetaUpdate:false,isErrorMetaUpdate:false, dataMetaUpdate:null, errorMetaUpdate: null, };
  case "PRODUCT_META_UPDATE_API_SUCCESS":
    return { ...state, isLoadingMetaUpdate: false, isSuccessMetaUpdate:true, isErrorMetaUpdate:false, dataMetaUpdate: action.payload, errorMetaUpdate: null };
  case "PRODUCT_META_UPDATE_API_FAILURE":
    return { ...state, isLoadingMetaUpdate: false,isSuccessMetaUpdate:false, isErrorMetaUpdate:true, dataMetaUpdate:null, errorMetaUpdate: action.error };
  case "PRODUCT_META_UPDATE_API_CLEAR":
    return {...state, isLoadingMetaUpdate: false, isSuccessMetaUpdate:false, isErrorMetaUpdate:false, dataMetaUpdate:null, errorMetaUpdate:null};

    default:
      return state;
  }
};
