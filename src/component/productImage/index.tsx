import React from "react";
import ReactImageMagnify from 'react-image-magnify';
import fashion from '../../assets/images/fashion.jpg'

const ProductImage = ({imageUrl}:any) => {
  return (
    <div style={{width:'500px', height:'500px'}}>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt:imageUrl,
            isFluidWidth: true,
            src: fashion,
          },
          largeImage: {
            src: imageUrl,
            width: 1600,
            height: 1800,
          },
        }}
      />
    </div>
  );
};

export default ProductImage;
