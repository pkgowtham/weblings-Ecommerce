import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Snackbar from '.';
import { createUseStyles } from 'react-jss';
import { useSnackbar } from './snackbarContext';

const useStyles = createUseStyles({
  container: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    zIndex: 1000,
    top: ({ position }: { position: string }) => (position.includes('top') ? 20 : 'auto'),
    bottom: ({ position }: { position: string }) => (position.includes('bottom') ? 20 : 'auto'),
    right: ({ position }: { position: string }) => (position.includes('right') ? 20 : 'auto'),
    left: ({ position }: { position: string }) => (position.includes('left') ? 20 : 'auto'),
    alignItems: ({ position }: { position: string }) =>
      position.includes('left') ? 'flex-start' : 'flex-end',
  },
});

const SnackbarContainer: React.FC = () => {
  const { state, dispatch } = useSnackbar();
  const [activeMessage, setActiveMessage] = useState<any>(state.messages[0] || null);
  const classes = useStyles({ position: activeMessage?.position || 'top-right' });

  useEffect(() => {
    if (!activeMessage && state.messages.length > 0) {
      setActiveMessage(state.messages[0]);
    }
  }, [state.messages, activeMessage]);

  useEffect(() => {
    if (activeMessage) {
      const timer = setTimeout(() => {
        setActiveMessage(null);
        setTimeout(() => dispatch({ type: 'HIDE_SNACKBAR' }), 500);
      }, activeMessage.duration || 1000);

      return () => clearTimeout(timer);
    }
  }, [activeMessage, dispatch]);

  if (!activeMessage) return null;

  return ReactDOM.createPortal(
    <div className={classes.container}>
      <Snackbar {...activeMessage} onClose={() => setActiveMessage(null)} />
    </div>,
    document.body
  );
};

export default SnackbarContainer;

// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
// import Snackbar from '.';
// import { createUseStyles } from 'react-jss';
// import { useSnackbar } from './snackbarContext';

// const useStyles = createUseStyles({
//   container: {
//     position: 'fixed',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: 10,
//     zIndex: 1000,
//     top: ({ position }: { position: string }) => (position.includes('top') ? 20 : 'auto'),
//     bottom: ({ position }: { position: string }) => (position.includes('bottom') ? 20 : 'auto'),
//     right: ({ position }: { position: string }) => (position.includes('right') ? 20 : 'auto'),
//     left: ({ position }: { position: string }) => (position.includes('left') ? 20 : 'auto'),
//     alignItems: ({ position }: { position: string }) =>
//       position.includes('left') ? 'flex-start' : 'flex-end',
//   },
// });

// const SnackbarContainer: React.FC = () => {
//   const { state, dispatch } = useSnackbar();
//   const [activeMessages, setActiveMessages] = useState<any>([]);
//   const classes = useStyles({ position: 'top-right' });

//   useEffect(() => {
//     if (state.messages.length > 0 && activeMessages.length === 0) {
//       setActiveMessages([...state.messages]);
//     }
//   }, [state.messages, activeMessages]);

//   useEffect(() => {
//     if (activeMessages.length > 0) {
//       const timer = setTimeout(() => {
//         setActiveMessages((prev) => prev.slice(1));
//         setTimeout(() => dispatch({ type: 'HIDE_SNACKBAR' }), 500);
//       }, activeMessages[0].duration || 3000);

//       return () => clearTimeout(timer);
//     }
//   }, [activeMessages, dispatch]);

//   if (activeMessages.length === 0) return null;

//   return ReactDOM.createPortal(
//     <div className={classes.container}>
//       {activeMessages.map((msg, index) => (
//         <Snackbar key={index} {...msg} onClose={() => {}} />
//       ))}
//     </div>,
//     document.body
//   );
// };

// export default SnackbarContainer;

