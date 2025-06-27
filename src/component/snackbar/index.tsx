// Snackbar.tsx
import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
// import Shake from '../animation/shake';

type SnackbarProps = {
  message: string;
  duration?: number;
  onClose: () => void;
  backgroundColor?: string;
  textColor?: string;
  style?: React.CSSProperties;
  type?: 'info' | 'success' | 'warning' | 'error';
  icon?: React.ReactNode;
  actionLabel?: string;
  onActionClick?: () => void;
};

const useStyles = createUseStyles({
  snackbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    borderRadius: 4,
    boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.10)',
    opacity: 0,
    transform: 'translateY(20px)',
    animation: '$slideIn 0.3s forwards',
    backgroundColor: ({ backgroundColor }: SnackbarProps) => backgroundColor || '#333',
    color: ({ textColor }: SnackbarProps) => textColor || '#fff',
    marginBottom: 10,
  },
  snackbarExit: {
    animation: '$fadeOut 0.5s forwards',
  },
  snackbarIcon: {
    marginRight: 8,
    fontSize: '1.2em',
  },
  snackbarAction: {
    background: 'none',
    border: 'none',
    color: 'inherit',
    marginLeft: 10,
    cursor: 'pointer',
    fontWeight: 'bold',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  '@keyframes slideIn': {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  '@keyframes fadeOut': {
    from: { opacity: 1 },
    to: { opacity: 0, transform: 'translateY(-20px)' },
  },
});

const DEFAULT_ICONS: Record<string, React.ReactNode> = {
  info: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  error: '❌',
};

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  duration = 3000,
  onClose,
  backgroundColor,
  textColor,
  type = 'info',
  icon,
  actionLabel,
  onActionClick,
}) => {
  const classes = useStyles({ backgroundColor, textColor } as any);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExiting(true), duration - 500);
    const cleanupTimer = setTimeout(onClose, duration);
    return () => {
      clearTimeout(timer);
      clearTimeout(cleanupTimer);
    };
  }, [duration, onClose]);

  return (
    <>
    {/* <Shake> */}
    <div className={`${classes.snackbar} ${exiting ? classes.snackbarExit : ''}`}>
      <span className={classes.snackbarIcon}>
        {icon || DEFAULT_ICONS[type]}
      </span>
      <span>{message}</span>
      {actionLabel && (
        <button className={classes.snackbarAction} onClick={onActionClick}>
          {actionLabel}
        </button>
      )}
    </div>
    {/* </Shake> */}
    </>
  );
};

export default Snackbar;
