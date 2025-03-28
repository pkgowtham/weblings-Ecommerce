import { Store } from "./store.types";

export const initialState: Store = {
  streamlinePriority: {
    //create
    isLoadingCreate: false,
    isSuccessCreate: false,
    isErrorCreate: false,
    dataCreate: null,
    errorCreate: null,

    //get
    isLoadingGet: false,
    isSuccessGet: false,
    isErrorGet: false,
    dataGet: {},
    errorGet: null,

    //getlist
    isLoadingGetList: false,
    isSuccessGetList: false,
    isErrorGetList: false,
    dataGetList: null,
    errorGetList: null,

    //update
    isLoadingUpdate: false,
    isSuccessUpdate: false,
    isErrorUpdate: false,
    dataUpdate: null,
    errorUpdate: null,

    //destroy
    isLoadingDestroy: false,
    isSuccessDestroy: false,
    isErrorDestroy: false,
    dataDestroy: null,
    errorDestroy: null,
  },

  productCategory: {
    //create
    isLoadingCreate: false,
    isSuccessCreate: false,
    isErrorCreate: false,
    dataCreate: null,
    errorCreate: null,

    //get
    isLoadingGet: false,
    isSuccessGet: false,
    isErrorGet: false,
    dataGet: {},
    errorGet: null,

    //getlist
    isLoadingGetList: false,
    isSuccessGetList: false,
    isErrorGetList: false,
    dataGetList: null,
    errorGetList: null,

    //update
    isLoadingUpdate: false,
    isSuccessUpdate: false,
    isErrorUpdate: false,
    dataUpdate: null,
    errorUpdate: null,

    //destroy
    isLoadingDestroy: false,
    isSuccessDestroy: false,
    isErrorDestroy: false,
    dataDestroy: null,
    errorDestroy: null,
  },

  productSubCategory: {
    //create
    isLoadingCreate: false,
    isSuccessCreate: false,
    isErrorCreate: false,
    dataCreate: null,
    errorCreate: null,

    //get
    isLoadingGet: false,
    isSuccessGet: false,
    isErrorGet: false,
    dataGet: {},
    errorGet: null,

    //getlist
    isLoadingGetList: false,
    isSuccessGetList: false,
    isErrorGetList: false,
    dataGetList: null,
    errorGetList: null,

    //update
    isLoadingUpdate: false,
    isSuccessUpdate: false,
    isErrorUpdate: false,
    dataUpdate: null,
    errorUpdate: null,

    //destroy
    isLoadingDestroy: false,
    isSuccessDestroy: false,
    isErrorDestroy: false,
    dataDestroy: null,
    errorDestroy: null,
  },

  productBrand: {
    //create
    isLoadingCreate: false,
    isSuccessCreate: false,
    isErrorCreate: false,
    dataCreate: null,
    errorCreate: null,

    //get
    isLoadingGet: false,
    isSuccessGet: false,
    isErrorGet: false,
    dataGet: {},
    errorGet: null,

    //getlist
    isLoadingGetList: false,
    isSuccessGetList: false,
    isErrorGetList: false,
    dataGetList: null,
    errorGetList: null,

    //update
    isLoadingUpdate: false,
    isSuccessUpdate: false,
    isErrorUpdate: false,
    dataUpdate: null,
    errorUpdate: null,

    //destroy
    isLoadingDestroy: false,
    isSuccessDestroy: false,
    isErrorDestroy: false,
    dataDestroy: null,
    errorDestroy: null,
  },

  productTag: {
    //create
    isLoadingCreate: false,
    isSuccessCreate: false,
    isErrorCreate: false,
    dataCreate: null,
    errorCreate: null,

    //get
    isLoadingGet: false,
    isSuccessGet: false,
    isErrorGet: false,
    dataGet: {},
    errorGet: null,

    //getlist
    isLoadingGetList: false,
    isSuccessGetList: false,
    isErrorGetList: false,
    dataGetList: null,
    errorGetList: null,

    //update
    isLoadingUpdate: false,
    isSuccessUpdate: false,
    isErrorUpdate: false,
    dataUpdate: null,
    errorUpdate: null,

    //destroy
    isLoadingDestroy: false,
    isSuccessDestroy: false,
    isErrorDestroy: false,
    dataDestroy: null,
    errorDestroy: null,
  },

  productColor: {
    //create
    isLoadingCreate: false,
    isSuccessCreate: false,
    isErrorCreate: false,
    dataCreate: null,
    errorCreate: null,

    //get
    isLoadingGet: false,
    isSuccessGet: false,
    isErrorGet: false,
    dataGet: {},
    errorGet: null,

    //getlist
    isLoadingGetList: false,
    isSuccessGetList: false,
    isErrorGetList: false,
    dataGetList: null,
    errorGetList: null,

    //update
    isLoadingUpdate: false,
    isSuccessUpdate: false,
    isErrorUpdate: false,
    dataUpdate: null,
    errorUpdate: null,

    //destroy
    isLoadingDestroy: false,
    isSuccessDestroy: false,
    isErrorDestroy: false,
    dataDestroy: null,
    errorDestroy: null,
  },

  productSize: {
    //create
    isLoadingCreate: false,
    isSuccessCreate: false,
    isErrorCreate: false,
    dataCreate: null,
    errorCreate: null,

    //get
    isLoadingGet: false,
    isSuccessGet: false,
    isErrorGet: false,
    dataGet: {},
    errorGet: null,

    //getlist
    isLoadingGetList: false,
    isSuccessGetList: false,
    isErrorGetList: false,
    dataGetList: null,
    errorGetList: null,

    //update
    isLoadingUpdate: false,
    isSuccessUpdate: false,
    isErrorUpdate: false,
    dataUpdate: null,
    errorUpdate: null,

    //destroy
    isLoadingDestroy: false,
    isSuccessDestroy: false,
    isErrorDestroy: false,
    dataDestroy: null,
    errorDestroy: null,
  },

  product: {
    //create
    isLoadingCreate: false,
    isSuccessCreate: false,
    isErrorCreate: false,
    dataCreate: null,
    errorCreate: null,

    //basic create
    isLoadingBasicCreate: false,
    isSuccessBasicCreate: false,
    isErrorBasicCreate: false,
    dataBasicCreate: null,
    errorBasicCreate: null,

    //Color create
    isLoadingColorCreate: false,
    isSuccessColorCreate: false,
    isErrorColorCreate: false,
    dataColorCreate: null,
    errorColorCreate: null,

    //Size create
    isLoadingSizeCreate: false,
    isSuccessSizeCreate: false,
    isErrorSizeCreate: false,
    dataSizeCreate: null,
    errorSizeCreate: null,

    //Stock and Price create
    isLoadingStockCreate: false,
    isSuccessStockCreate: false,
    isErrorStockCreate: false,
    dataStockCreate: null,
    errorStockCreate: null,

    //Meta create
    isLoadingMetaCreate: false,
    isSuccessMetaCreate: false,
    isErrorMetaCreate: false,
    dataMetaCreate: null,
    errorMetaCreate: null,

    //get
    isLoadingGet: false,
    isSuccessGet: false,
    isErrorGet: false,
    dataGet: null,
    errorGet: null,

    //basic get
    isLoadingBasicGet: false,
    isSuccessBasicGet: false,
    isErrorBasicGet: false,
    dataBasicGet: null,
    errorBasicGet: null,

    //Color get
    isLoadingColorGet: false,
    isSuccessColorGet: false,
    isErrorColorGet: false,
    dataColorGet: null,
    errorColorGet: null,

    //Size get
    isLoadingSizeGet: false,
    isSuccessSizeGet: false,
    isErrorSizeGet: false,
    dataSizeGet: null,
    errorSizeGet: null,

    //Stock and Price get
    isLoadingStockGet: false,
    isSuccessStockGet: false,
    isErrorStockGet: false,
    dataStockGet: null,
    errorStockGet: null,

    //Meta get
    isLoadingMetaGet: false,
    isSuccessMetaGet: false,
    isErrorMetaGet: false,
    dataMetaGet: null,
    errorMetaGet: null,

    //getlist
    isLoadingGetList: false,
    isSuccessGetList: false,
    isErrorGetList: false,
    dataGetList: null,
    errorGetList: null,

    //Basic getlist
    isLoadingBasicGetList: false,
    isSuccessBasicGetList: false,
    isErrorBasicGetList: false,
    dataBasicGetList: null,
    errorBasicGetList: null,

    //Job getlist
    isLoadingJobGetList: false,
    isSuccessJobGetList: false,
    isErrorJobGetList: false,
    dataJobGetList: null,
    errorJobGetList: null,

    //Work getlist
    isLoadingWorkGetList: false,
    isSuccessWorkGetList: false,
    isErrorWorkGetList: false,
    dataWorkGetList: null,
    errorWorkGetList: null,

    //Finance getlist
    isLoadingFinanceGetList: false,
    isSuccessFinanceGetList: false,
    isErrorFinanceGetList: false,
    dataFinanceGetList: null,
    errorFinanceGetList: null,

    //update
    isLoadingUpdate: false,
    isSuccessUpdate: false,
    isErrorUpdate: false,
    dataUpdate: null,
    errorUpdate: null,

    //Basic update
    isLoadingBasicUpdate: false,
    isSuccessBasicUpdate: false,
    isErrorBasicUpdate: false,
    dataBasicUpdate: null,
    errorBasicUpdate: null,

    //Color update
    isLoadingColorUpdate: false,
    isSuccessColorUpdate: false,
    isErrorColorUpdate: false,
    dataColorUpdate: null,
    errorColorUpdate: null,

    //Size update
    isLoadingSizeUpdate: false,
    isSuccessSizeUpdate: false,
    isErrorSizeUpdate: false,
    dataSizeUpdate: null,
    errorSizeUpdate: null,

    //Stock and Price update
    isLoadingStockUpdate: false,
    isSuccessStockUpdate: false,
    isErrorStockUpdate: false,
    dataStockUpdate: null,
    errorStockUpdate: null,

    //Meta update
    isLoadingMetaUpdate: false,
    isSuccessMetaUpdate: false,
    isErrorMetaUpdate: false,
    dataMetaUpdate: null,
    errorMetaUpdate: null,

    //destroy
    isLoadingDestroy: false,
    isSuccessDestroy: false,
    isErrorDestroy: false,
    dataDestroy: null,
    errorDestroy: null,

    //Basic destroy
    isLoadingBasicDestroy: false,
    isSuccessBasicDestroy: false,
    isErrorBasicDestroy: false,
    dataBasicDestroy: null,
    errorBasicDestroy: null,

    //Job destroy
    isLoadingJobDestroy: false,
    isSuccessJobDestroy: false,
    isErrorJobDestroy: false,
    dataJobDestroy: null,
    errorJobDestroy: null,

    //Work destroy
    isLoadingWorkDestroy: false,
    isSuccessWorkDestroy: false,
    isErrorWorkDestroy: false,
    dataWorkDestroy: null,
    errorWorkDestroy: null,

    //Finance destroy
    isLoadingFinanceDestroy: false,
    isSuccessFinanceDestroy: false,
    isErrorFinanceDestroy: false,
    dataFinanceDestroy: null,
    errorFinanceDestroy: null,
  },

  adminLogin: {
    //create
    isLoadingCreate: false,
    isSuccessCreate: false,
    isErrorCreate: false,
    dataCreate: null,
    errorCreate: null,

    //get
    isLoadingGet: false,
    isSuccessGet: false,
    isErrorGet: false,
    dataGet: {},
    errorGet: null,

    //getlist
    isLoadingGetList: false,
    isSuccessGetList: false,
    isErrorGetList: false,
    dataGetList: null,
    errorGetList: null,

    //update
    isLoadingUpdate: false,
    isSuccessUpdate: false,
    isErrorUpdate: false,
    dataUpdate: null,
    errorUpdate: null,

    //destroy
    isLoadingDestroy: false,
    isSuccessDestroy: false,
    isErrorDestroy: false,
    dataDestroy: null,
    errorDestroy: null,
  },

  order: {
    //create
    isLoadingCreate: false,
    isSuccessCreate: false,
    isErrorCreate: false,
    dataCreate: null,
    errorCreate: null,

    //get
    isLoadingGet: false,
    isSuccessGet: false,
    isErrorGet: false,
    dataGet: {},
    errorGet: null,

    //getlist
    isLoadingGetList: false,
    isSuccessGetList: false,
    isErrorGetList: false,
    dataGetList: null,
    errorGetList: null,

    //update
    isLoadingUpdate: false,
    isSuccessUpdate: false,
    isErrorUpdate: false,
    dataUpdate: null,
    errorUpdate: null,

    //destroy
    isLoadingDestroy: false,
    isSuccessDestroy: false,
    isErrorDestroy: false,
    dataDestroy: null,
    errorDestroy: null,
  },

  shipped: {
    //create
    isLoadingCreate: false,
    isSuccessCreate: false,
    isErrorCreate: false,
    dataCreate: null,
    errorCreate: null,

    //get
    isLoadingGet: false,
    isSuccessGet: false,
    isErrorGet: false,
    dataGet: {},
    errorGet: null,

    //getlist
    isLoadingGetList: false,
    isSuccessGetList: false,
    isErrorGetList: false,
    dataGetList: null,
    errorGetList: null,

    //update
    isLoadingUpdate: false,
    isSuccessUpdate: false,
    isErrorUpdate: false,
    dataUpdate: null,
    errorUpdate: null,

    //destroy
    isLoadingDestroy: false,
    isSuccessDestroy: false,
    isErrorDestroy: false,
    dataDestroy: null,
    errorDestroy: null,
  },

  courior: {
    //create
    isLoadingCreate: false,
    isSuccessCreate: false,
    isErrorCreate: false,
    dataCreate: null,
    errorCreate: null,

    //get
    isLoadingGet: false,
    isSuccessGet: false,
    isErrorGet: false,
    dataGet: {},
    errorGet: null,

    //getlist
    isLoadingGetList: false,
    isSuccessGetList: false,
    isErrorGetList: false,
    dataGetList: null,
    errorGetList: null,

    //update
    isLoadingUpdate: false,
    isSuccessUpdate: false,
    isErrorUpdate: false,
    dataUpdate: null,
    errorUpdate: null,

    //destroy
    isLoadingDestroy: false,
    isSuccessDestroy: false,
    isErrorDestroy: false,
    dataDestroy: null,
    errorDestroy: null,
  },

  productWishlist: {
    //create
    isLoadingCreate: false,
    isSuccessCreate: false,
    isErrorCreate: false,
    dataCreate: null,
    errorCreate: null,

    //get
    isLoadingGet: false,
    isSuccessGet: false,
    isErrorGet: false,
    dataGet: {},
    errorGet: null,

    //getlist
    isLoadingGetList: false,
    isSuccessGetList: false,
    isErrorGetList: false,
    dataGetList: null,
    errorGetList: null,

    //update
    isLoadingUpdate: false,
    isSuccessUpdate: false,
    isErrorUpdate: false,
    dataUpdate: null,
    errorUpdate: null,

    //destroy
    isLoadingDestroy: false,
    isSuccessDestroy: false,
    isErrorDestroy: false,
    dataDestroy: null,
    errorDestroy: null,
  },

  productRating: {
    //create
    isLoadingCreate: false,
    isSuccessCreate: false,
    isErrorCreate: false,
    dataCreate: null,
    errorCreate: null,

    //get
    isLoadingGet: false,
    isSuccessGet: false,
    isErrorGet: false,
    dataGet: {},
    errorGet: null,

    //getlist
    isLoadingGetList: false,
    isSuccessGetList: false,
    isErrorGetList: false,
    dataGetList: null,
    errorGetList: null,

    //update
    isLoadingUpdate: false,
    isSuccessUpdate: false,
    isErrorUpdate: false,
    dataUpdate: null,
    errorUpdate: null,

    //destroy
    isLoadingDestroy: false,
    isSuccessDestroy: false,
    isErrorDestroy: false,
    dataDestroy: null,
    errorDestroy: null,
  },

  productAddToCart: {
    //create
    isLoadingCreate: false,
    isSuccessCreate: false,
    isErrorCreate: false,
    dataCreate: null,
    errorCreate: null,

    //get
    isLoadingGet: false,
    isSuccessGet: false,
    isErrorGet: false,
    dataGet: {},
    errorGet: null,

    //getlist
    isLoadingGetList: false,
    isSuccessGetList: false,
    isErrorGetList: false,
    dataGetList: null,
    errorGetList: null,

    //update
    isLoadingUpdate: false,
    isSuccessUpdate: false,
    isErrorUpdate: false,
    dataUpdate: null,
    errorUpdate: null,

    //destroy
    isLoadingDestroy: false,
    isSuccessDestroy: false,
    isErrorDestroy: false,
    dataDestroy: null,
    errorDestroy: null,
  },

  comment: {
    //create
    isLoadingCreate: false,
    isSuccessCreate: false,
    isErrorCreate: false,
    dataCreate: null,
    errorCreate: null,

    //get
    isLoadingGet: false,
    isSuccessGet: false,
    isErrorGet: false,
    dataGet: {},
    errorGet: null,

    //getlist
    isLoadingGetList: false,
    isSuccessGetList: false,
    isErrorGetList: false,
    dataGetList: null,
    errorGetList: null,

    //update
    isLoadingUpdate: false,
    isSuccessUpdate: false,
    isErrorUpdate: false,
    dataUpdate: null,
    errorUpdate: null,

    //destroy
    isLoadingDestroy: false,
    isSuccessDestroy: false,
    isErrorDestroy: false,
    dataDestroy: null,
    errorDestroy: null,

      //All destroy
      isLoadingAllDestroy: false,
      isSuccessAllDestroy: false,
      isErrorAllDestroy: false,
      dataAllDestroy: null,
      errorAllDestroy: null,
  },

  commonInternal: {
    addAttachment: [],
    fileUrl: [],
    currentPage: 1,
    totalPages: 0,
    rowsPerPage: 5,
    showDeleteModel: false,
    isCollapsed: false,
    isCalenderOpen: false,
    matches: [],
    highlightedIndex: 0,
    roleSearchTerm: "",
    loading: false,
    errors: {},
    search: {},
    light: false,
    orderBy: "",
    orderDirection: "",
    isAddToCart:false
  },

  productInternal: {
    selectTab: "basic",
  },

  orderInternal: {
    selectTab: "initiate",
  },

  addToCartInternal:{
    selectedProduct:null,
  },

  productApiData:{
    name: "",
    Longdesc: "",
    shortdesc: "",
    categoryId: "",
    subCategoryId: "",
    brandId: "",
    // minOrderQuantity: "",
    // maxOrderQuantity: "",
    // aggregateReviewValue: "",
    colorList: [],
    sizeList: [],
    prices:[],
    stocks: [],
    tagList: []
  }
  
}