// SnackbarContext.tsx
import React, { createContext, useReducer, useContext, ReactNode } from "react";

type SnackbarMessage = {
  message: string;
  position?: "top-right" | "bottom-right" | "top-left" | "bottom-left";
  duration: number;
  type?: "info" | "success" | "warning" | "error";
  backgroundColor?: string;
  textColor?: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onActionClick?: () => void;
};

type SnackbarState = {
  messages: SnackbarMessage[];
  isVisible: boolean;
};

type SnackbarAction =
  | { type: "SHOW_SNACKBAR"; payload: SnackbarMessage }
  | { type: "HIDE_SNACKBAR" };

const initialState: SnackbarState = {
  messages: [],
  isVisible: false,
};

function snackbarReducer(
  state: SnackbarState,
  action: SnackbarAction
): SnackbarState {
  switch (action.type) {
    case "SHOW_SNACKBAR":
      return {
        ...state,
        messages: [...state.messages, action.payload],
        isVisible: true,
      };
    case "HIDE_SNACKBAR":
      return {
        ...state,
        messages: state.messages.slice(1),
        isVisible: state.messages.length > 1,
      };
    default:
      return state;
  }
}

const SnackbarContext = createContext<{
  state: SnackbarState;
  dispatch: React.Dispatch<SnackbarAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(snackbarReducer, initialState);
  return (
    <SnackbarContext.Provider value={{ state, dispatch }}>
      {children}
    </SnackbarContext.Provider>
  );
};

// Custom hook to use Snackbar context
export const useSnackbar = () => useContext(SnackbarContext);
