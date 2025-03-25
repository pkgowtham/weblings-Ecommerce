import { useStore } from "./index";
import { apiFetch } from "./apiInstance";
import { ActionType } from "./action.types";
import { useContext } from "react";
// import GlobalContext from "../context/globalContext";
// import { useSnackbar } from "../components/snackbar/snackbarContext";
// import { theme } from "../theme/oceanBlueLight";

export function* apiMiddleware(action: ActionType, ) {
  if (action.type.endsWith("_API_REQUEST")) {
   
    // setLoading(true)
    yield { type: action.type.replace("_REQUEST", "_LOADING") };
    try { 
      const data = yield apiFetch(action.payload);
      // setLoading(false)
      // snackbarDispatch({
      //   type: "SHOW_SNACKBAR",
      //   payload: {
      //     position: "top-right",
      //     message:data.message,
      //     duration: 2000,
      //     type: "success",
      //     // backgroundColor: '#151515',
      //     // textColor: "#FFFFFF",
      //     // icon: <span>❗</span>,
      //     // actionLabel: "Retry",
      //     // onActionClick: () => alert("Retrying..."),
      //   },
      // });
      yield {
        type: action.type.replace("_REQUEST", "_SUCCESS"),
        payload: data,
      };
      if (action.clear) {
        yield { type: action.type.replace("_REQUEST", "_CLEAR") };
      }
    } catch (error: any) {
      // setLoading(false)
      // snackbarDispatch({
      //   type: "SHOW_SNACKBAR",
      //   payload: {
      //     position: "top-right",
      //     message:error.message,
      //     duration: 2000,
      //     type: "error",
      //     backgroundColor: theme.color.positive.surface.light,
      //     textColor: "#FFFFFF",
      //   },
      // });
      yield {
        type: action.type.replace("_REQUEST", "_FAILURE"),
        error: error,
      };

      if (action.clear) {
        yield { type: action.type.replace("_REQUEST", "_CLEAR") };
      }
    }
  }
}

export const useMiddlewareDispatch = () => {
  const { dispatch } = useStore();
  // const {setLoading} = useContext(GlobalContext);
  // const {dispatch:snackbarDispatch} = useSnackbar();
  const { store } = useStore();

  return async (action: ActionType) => {
    if (action.type.endsWith("_API_REQUEST")) {
      // const generator = apiMiddleware(action, setLoading, snackbarDispatch);
      const generator = apiMiddleware(action);

      // Handle the generator's lifecycle manually
      let next = generator.next();

      while (!next.done) {
        const yieldedValue = next.value;
        

        if (yieldedValue instanceof Promise) {
          try {
            // Await the promise and pass the resolved value back to the generator
            const resolvedValue = await yieldedValue;
            next = generator.next(resolvedValue);
          } catch (error: any) {
            // Pass the error back to the generator to allow it to handle the failure
            next = generator.throw(error);
          }
        } else {
          // Dispatch any non-promise yielded values directly
          dispatch(yieldedValue);
          next = generator.next();
        }
      }
    } else {
      dispatch(action);
      // Handle clear action for non-API actions
      if (action.clear) {
        dispatch({ type: `${action.type}_CLEAR` });
      }
    }
  };
};

