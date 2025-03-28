import { adminLoginReducer } from '../services/auth';
import { commonInternalReducer } from '../services/internals/commons';
import { productInternalReducer } from '../services/internals/product';
import { productBrandReducer } from '../services/product/brand';
import { productCategoryReducer } from '../services/product/category';
import { productColorReducer } from '../services/product/color';
import { commentsReducer } from '../services/auth/comments';
import { productReducer } from '../services/product/product';
import { productSizeReducer } from '../services/product/size';
import { productSubCategoryReducer } from '../services/product/subCategory';
import { productTagReducer } from '../services/product/tag';
import { streamlinePriorityReducer } from '../services/streamline/priority';
import { ActionType } from './action.types';
import { Store } from './store.types';
import { orderInternalReducer } from '../services/internals/orders';
import { productApiDataInternalReducer } from '../services/product/apiData';
import { orderReducer } from '../services/order/order';
import { shippedReducer } from '../services/shipped';
import { couriorReducer } from '../services/courior';
import { productAddToCartReducer } from '../services/addToCart';
import { productWishlistReducer } from '../services/wishlist';
import { addToCartInternalReducer } from '../services/internals/addToCart';
import { productRatingReducer } from '../services/rating';


export const combineReducers = (reducers: {
  [key: string]: (state: any, action: ActionType) => any;
}) => {
  return (state: Store, action: ActionType): Store => {
    const newState: Store = {} as Store;

    for (const key in reducers) {
      newState[key as keyof Store] = reducers[key](state[key as keyof Store], action);
    }

    return newState;
  };
};

export const rootReducer = combineReducers({
  commonInternal:commonInternalReducer,
  orderInternal:orderInternalReducer,
  addToCartInternal:addToCartInternalReducer,
  adminLogin:adminLoginReducer,
  comment:commentsReducer,
  productCategory:productCategoryReducer,
  productSubCategory:productSubCategoryReducer,
  productBrand:productBrandReducer,
  productTag:productTagReducer,
  productColor:productColorReducer,
  productSize:productSizeReducer,
  product:productReducer,
  productInternal:productInternalReducer,
  productAddToCart:productAddToCartReducer,
  productWishlist:productWishlistReducer,
  productRating:productRatingReducer,
  productApiData:productApiDataInternalReducer,
  order:orderReducer,
  shipped:shippedReducer,
  courior:couriorReducer,
  streamlinePriority:streamlinePriorityReducer,
});
    