import { useStyle } from "./indexstyle";

const Input = ({...props}) => {
  const classes = useStyle();
  return (
    <input
      className={classes.inputDiv}
      {...props}
    >

    </input>
  );
};

export default Input;
