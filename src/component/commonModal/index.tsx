import React from 'react'
import clsx from 'clsx'
import { useStyle } from './style';

 interface CommonModal {
    children:any;
    className?:any;
    [key:string]:any;
}

const CommonModel:React.FC<CommonModal> = ({children, className, ...props}) => {

const classes = useStyle()

  return (
    <div className={classes.overlay}>
        <div className={clsx(classes.container,className)} {...props}>
            {children}
        </div>
    </div>
  )
}

export default CommonModel