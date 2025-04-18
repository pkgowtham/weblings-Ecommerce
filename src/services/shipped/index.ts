import { ActionType } from "../../store/action.types";
import { initialState } from "../../store/initialState";
import { Store } from "../../store/store.types";

export const shippedReducer = (
  state: any = initialState.order,
  action: ActionType
): any => {
  switch (action.type) {
    case "SHIPPED_GET_API_LOADING":
      return { ...state, isLoadingGet: true,isSuccessGet:false,isErrorGet:false, dataGet:null, errorGet: null, };
    case "SHIPPED_GET_API_SUCCESS":
      return { ...state, isLoadingGet: false, isSuccessGet:true, isErrorGet:false, dataGet: action.payload, errorGet: null };
    case "SHIPPED_GET_API_FAILURE":
      return { ...state, isLoadingGet: false,isSuccessGet:false, isErrorGet:true, dataGet:null, errorGet: action.error };
    case "SHIPPED_GET_API_CLEAR":
      return {...state, isLoadingGet: false, isSuccessGet:false, isErrorGet:false, dataGet:null, errorGet:null,};

      case "SHIPPED_GETLIST_API_LOADING":
      return { ...state, isLoadingGetList: true,isSuccessGetList:false,isErrorGetList:false, dataGetList:null, errorGetList: null, };
    case "SHIPPED_GETLIST_API_SUCCESS":
      return { ...state, isLoadingGetList: false, isSuccessGetList:true, isErrorGetList:false, dataGetList: action.payload, errorGetList: null };
    case "SHIPPED_GETLIST_API_FAILURE":
      return { ...state, isLoadingGetList: false,isSuccessGetList:false, isErrorGetList:true, dataGetList:null, errorGetList: action.error };
    case "SHIPPED_GETLIST_API_CLEAR":
      return {...state, isLoadingGetList: false, isSuccessGetList:false, isErrorGetList:false, dataGetList:null, errorGetList:null,};

      case "SHIPPED_CREATE_API_LOADING":
      return { ...state, isLoadingCreate: true,isSuccessCreate:false,isErrorCreate:false, dataCreate:null, errorCreate: null};
    case "SHIPPED_CREATE_API_SUCCESS":
      return { ...state, isLoadingCreate: false,isSuccessCreate:true,isErrorCreate:false,dataCreate: action.payload, errorCreate: null };
    case "SHIPPED_CREATE_API_FAILURE":
      return { ...state, isLoadingCreate: false,isSuccessCreate:false,isErrorCreate:true,dataCreate:null, errorCreate: action.error };
    case "SHIPPED_CREATE_API_CLEAR":
      return {...state, isLoadingCreate: false, isSuccessCreate:false, isErrorCreate:false, dataCreate:null, errorCreate:null,};

      case "SHIPPED_UPDATE_API_LOADING":
      return { ...state, isLoadingUpdate: true,isSuccessUpdate:false,isErrorUpdate:false, dataUpdate:null, errorUpdate: null};
    case "SHIPPED_UPDATE_API_SUCCESS":
      return { ...state, isLoadingUpdate: false,isSuccessUpdate:true,isErrorUpdate:false,dataUpdate: action.payload, errorUpdate: null };
    case "SHIPPED_UPDATE_API_FAILURE":
      return { ...state, isLoadingUpdate: false,isSuccessUpdate:false,isErrorUpdate:true,dataUpdate:null, errorUpdate: action.error };
    case "SHIPPED_UPDATE_API_CLEAR":
      return {...state, isLoadingUpdate: false, isSuccessUpdate:false, isErrorUpdate:false, dataUpdate:null, errorUpdate:null,};

      case "SHIPPED_DESTROY_API_LOADING":
        return { ...state, isLoadingDestroy: true,isSuccessDestroy:false,isErrorDestroy:false, dataDestroy:null, errorDestroy: null};
      case "SHIPPED_DESTROY_API_SUCCESS":
        return { ...state, isLoadingDestroy: false,isSuccessDestroy:true,isErrorDestroy:false,dataDestroy: action.payload, errorDestroy: null };
      case "SHIPPED_DESTROY_API_FAILURE":
        return { ...state, isLoadingDestroy: false,isSuccessDestroy:false,isErrorDestroy:true,dataDestroy:null, errorDestroy: action.error };
      case "SHIPPED_DESTROY_API_CLEAR":
        return {...state, isLoadingDestroy: false, isSuccessDestroy:false, isErrorDestroy:false, dataDestroy:null, errorDestroy:null,};
    default:
      return state;
  }
};
