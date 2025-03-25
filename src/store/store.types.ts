export interface Store {
  streamlinePriority: {
    //create
    isLoadingCreate: boolean;
    isSuccessCreate: boolean;
    isErrorCreate: boolean;
    dataCreate: string | null;
    errorCreate: string | null;

    //get
    isLoadingGet: boolean;
    isSuccessGet: boolean;
    isErrorGet: boolean;
    dataGet: any;
    errorGet: string | null;

    //getlist
    isLoadingGetList: boolean;
    isSuccessGetList: boolean;
    isErrorGetList: boolean;
    dataGetList: any;
    errorGetList: string | null;

    //update
    isLoadingUpdate: boolean;
    isSuccessUpdate: boolean;
    isErrorUpdate: boolean;
    dataUpdate: string | null;
    errorUpdate: string | null;

    //destroy
    isLoadingDestroy: boolean;
    isSuccessDestroy: boolean;
    isErrorDestroy: boolean;
    dataDestroy: string | null;
    errorDestroy: string | null;
  };

  productCategory: {
    //create
    isLoadingCreate: boolean;
    isSuccessCreate: boolean;
    isErrorCreate: boolean;
    dataCreate: string | null;
    errorCreate: string | null;

    //get
    isLoadingGet: boolean;
    isSuccessGet: boolean;
    isErrorGet: boolean;
    dataGet: any;
    errorGet: string | null;

    //getlist
    isLoadingGetList: boolean;
    isSuccessGetList: boolean;
    isErrorGetList: boolean;
    dataGetList: any;
    errorGetList: string | null;

    //update
    isLoadingUpdate: boolean;
    isSuccessUpdate: boolean;
    isErrorUpdate: boolean;
    dataUpdate: string | null;
    errorUpdate: string | null;

    //destroy
    isLoadingDestroy: boolean;
    isSuccessDestroy: boolean;
    isErrorDestroy: boolean;
    dataDestroy: string | null;
    errorDestroy: string | null;
  };

  productSubCategory: {
    //create
    isLoadingCreate: boolean;
    isSuccessCreate: boolean;
    isErrorCreate: boolean;
    dataCreate: string | null;
    errorCreate: string | null;

    //get
    isLoadingGet: boolean;
    isSuccessGet: boolean;
    isErrorGet: boolean;
    dataGet: any;
    errorGet: string | null;

    //getlist
    isLoadingGetList: boolean;
    isSuccessGetList: boolean;
    isErrorGetList: boolean;
    dataGetList: any;
    errorGetList: string | null;

    //update
    isLoadingUpdate: boolean;
    isSuccessUpdate: boolean;
    isErrorUpdate: boolean;
    dataUpdate: string | null;
    errorUpdate: string | null;

    //destroy
    isLoadingDestroy: boolean;
    isSuccessDestroy: boolean;
    isErrorDestroy: boolean;
    dataDestroy: string | null;
    errorDestroy: string | null;
  };

  productBrand: {
    //create
    isLoadingCreate: boolean;
    isSuccessCreate: boolean;
    isErrorCreate: boolean;
    dataCreate: string | null;
    errorCreate: string | null;

    //get
    isLoadingGet: boolean;
    isSuccessGet: boolean;
    isErrorGet: boolean;
    dataGet: any;
    errorGet: string | null;

    //getlist
    isLoadingGetList: boolean;
    isSuccessGetList: boolean;
    isErrorGetList: boolean;
    dataGetList: any;
    errorGetList: string | null;

    //update
    isLoadingUpdate: boolean;
    isSuccessUpdate: boolean;
    isErrorUpdate: boolean;
    dataUpdate: string | null;
    errorUpdate: string | null;

    //destroy
    isLoadingDestroy: boolean;
    isSuccessDestroy: boolean;
    isErrorDestroy: boolean;
    dataDestroy: string | null;
    errorDestroy: string | null;
  };

  productTag: {
    //create
    isLoadingCreate: boolean;
    isSuccessCreate: boolean;
    isErrorCreate: boolean;
    dataCreate: string | null;
    errorCreate: string | null;

    //get
    isLoadingGet: boolean;
    isSuccessGet: boolean;
    isErrorGet: boolean;
    dataGet: any;
    errorGet: string | null;

    //getlist
    isLoadingGetList: boolean;
    isSuccessGetList: boolean;
    isErrorGetList: boolean;
    dataGetList: any;
    errorGetList: string | null;

    //update
    isLoadingUpdate: boolean;
    isSuccessUpdate: boolean;
    isErrorUpdate: boolean;
    dataUpdate: string | null;
    errorUpdate: string | null;

    //destroy
    isLoadingDestroy: boolean;
    isSuccessDestroy: boolean;
    isErrorDestroy: boolean;
    dataDestroy: string | null;
    errorDestroy: string | null;
  };

  productColor: {
    //create
    isLoadingCreate: boolean;
    isSuccessCreate: boolean;
    isErrorCreate: boolean;
    dataCreate: string | null;
    errorCreate: string | null;

    //get
    isLoadingGet: boolean;
    isSuccessGet: boolean;
    isErrorGet: boolean;
    dataGet: any;
    errorGet: string | null;

    //getlist
    isLoadingGetList: boolean;
    isSuccessGetList: boolean;
    isErrorGetList: boolean;
    dataGetList: any;
    errorGetList: string | null;

    //update
    isLoadingUpdate: boolean;
    isSuccessUpdate: boolean;
    isErrorUpdate: boolean;
    dataUpdate: string | null;
    errorUpdate: string | null;

    //destroy
    isLoadingDestroy: boolean;
    isSuccessDestroy: boolean;
    isErrorDestroy: boolean;
    dataDestroy: string | null;
    errorDestroy: string | null;
  };

  productSize: {
    //create
    isLoadingCreate: boolean;
    isSuccessCreate: boolean;
    isErrorCreate: boolean;
    dataCreate: string | null;
    errorCreate: string | null;

    //get
    isLoadingGet: boolean;
    isSuccessGet: boolean;
    isErrorGet: boolean;
    dataGet: any;
    errorGet: string | null;

    //getlist
    isLoadingGetList: boolean;
    isSuccessGetList: boolean;
    isErrorGetList: boolean;
    dataGetList: any;
    errorGetList: string | null;

    //update
    isLoadingUpdate: boolean;
    isSuccessUpdate: boolean;
    isErrorUpdate: boolean;
    dataUpdate: string | null;
    errorUpdate: string | null;

    //destroy
    isLoadingDestroy: boolean;
    isSuccessDestroy: boolean;
    isErrorDestroy: boolean;
    dataDestroy: string | null;
    errorDestroy: string | null;
  };

  product: {
    //create
    isLoadingCreate: boolean;
    isSuccessCreate: boolean;
    isErrorCreate: boolean;
    dataCreate: string | null;
    errorCreate: string | null;

    //basic create
    isLoadingBasicCreate: boolean;
    isSuccessBasicCreate: boolean;
    isErrorBasicCreate: boolean;
    dataBasicCreate: any;
    errorBasicCreate: string | null;

    //Color create
    isLoadingColorCreate: boolean;
    isSuccessColorCreate: boolean;
    isErrorColorCreate: boolean;
    dataColorCreate: string | null;
    errorColorCreate: string | null;

    //Size create
    isLoadingSizeCreate: boolean;
    isSuccessSizeCreate: boolean;
    isErrorSizeCreate: boolean;
    dataSizeCreate: string | null;
    errorSizeCreate: string | null;

    //Stock and Price create
    isLoadingStockCreate: boolean;
    isSuccessStockCreate: boolean;
    isErrorStockCreate: boolean;
    dataStockCreate: string | null;
    errorStockCreate: string | null;

    //Meta create
    isLoadingMetaCreate: boolean;
    isSuccessMetaCreate: boolean;
    isErrorMetaCreate: boolean;
    dataMetaCreate: string | null;
    errorMetaCreate: string | null;

    //get
    isLoadingGet: boolean;
    isSuccessGet: boolean;
    isErrorGet: boolean;
    dataGet: any;
    errorGet: string | null;

    //basic get
    isLoadingBasicGet: boolean;
    isSuccessBasicGet: boolean;
    isErrorBasicGet: boolean;
    dataBasicGet: any;
    errorBasicGet: string | null;

    //Color get
    isLoadingColorGet: boolean;
    isSuccessColorGet: boolean;
    isErrorColorGet: boolean;
    dataColorGet: any;
    errorColorGet: string | null;

    //Size get
    isLoadingSizeGet: boolean;
    isSuccessSizeGet: boolean;
    isErrorSizeGet: boolean;
    dataSizeGet: any;
    errorSizeGet: string | null;

    //Stock and Price get
    isLoadingStockGet: boolean;
    isSuccessStockGet: boolean;
    isErrorStockGet: boolean;
    dataStockGet: any;
    errorStockGet: string | null;

    //Meta get
    isLoadingMetaGet: boolean;
    isSuccessMetaGet: boolean;
    isErrorMetaGet: boolean;
    dataMetaGet: any;
    errorMetaGet: string | null;

    //getlist
    isLoadingGetList: boolean;
    isSuccessGetList: boolean;
    isErrorGetList: boolean;
    dataGetList: string | null;
    errorGetList: string | null;

    //Basic getlist
    isLoadingBasicGetList: boolean;
    isSuccessBasicGetList: boolean;
    isErrorBasicGetList: boolean;
    dataBasicGetList: string | null;
    errorBasicGetList: string | null;

    //Job getlist
    isLoadingJobGetList: boolean;
    isSuccessJobGetList: boolean;
    isErrorJobGetList: boolean;
    dataJobGetList: string | null;
    errorJobGetList: string | null;

    //Work getlist
    isLoadingWorkGetList: boolean;
    isSuccessWorkGetList: boolean;
    isErrorWorkGetList: boolean;
    dataWorkGetList: string | null;
    errorWorkGetList: string | null;

    //Finance getlist
    isLoadingFinanceGetList: boolean;
    isSuccessFinanceGetList: boolean;
    isErrorFinanceGetList: boolean;
    dataFinanceGetList: string | null;
    errorFinanceGetList: string | null;

    //update
    isLoadingUpdate: boolean;
    isSuccessUpdate: boolean;
    isErrorUpdate: boolean;
    dataUpdate: string | null;
    errorUpdate: string | null;

    //Basic update
    isLoadingBasicUpdate: boolean;
    isSuccessBasicUpdate: boolean;
    isErrorBasicUpdate: boolean;
    dataBasicUpdate: string | null;
    errorBasicUpdate: string | null;

    //Color update
    isLoadingColorUpdate: boolean;
    isSuccessColorUpdate: boolean;
    isErrorColorUpdate: boolean;
    dataColorUpdate: string | null;
    errorColorUpdate: string | null;

    //Size update
    isLoadingSizeUpdate: boolean;
    isSuccessSizeUpdate: boolean;
    isErrorSizeUpdate: boolean;
    dataSizeUpdate: string | null;
    errorSizeUpdate: string | null;

    //Stock and Price update
    isLoadingStockUpdate: boolean;
    isSuccessStockUpdate: boolean;
    isErrorStockUpdate: boolean;
    dataStockUpdate: string | null;
    errorStockUpdate: string | null;

    //Meta update
    isLoadingMetaUpdate: boolean;
    isSuccessMetaUpdate: boolean;
    isErrorMetaUpdate: boolean;
    dataMetaUpdate: string | null;
    errorMetaUpdate: string | null;

    //destroy
    isLoadingDestroy: boolean;
    isSuccessDestroy: boolean;
    isErrorDestroy: boolean;
    dataDestroy: string | null;
    errorDestroy: string | null;

    //Basic destroy
    isLoadingBasicDestroy: boolean;
    isSuccessBasicDestroy: boolean;
    isErrorBasicDestroy: boolean;
    dataBasicDestroy: string | null;
    errorBasicDestroy: string | null;

    //Job destroy
    isLoadingJobDestroy: boolean;
    isSuccessJobDestroy: boolean;
    isErrorJobDestroy: boolean;
    dataJobDestroy: string | null;
    errorJobDestroy: string | null;

    //Work destroy
    isLoadingWorkDestroy: boolean;
    isSuccessWorkDestroy: boolean;
    isErrorWorkDestroy: boolean;
    dataWorkDestroy: string | null;
    errorWorkDestroy: string | null;

    //Finance destroy
    isLoadingFinanceDestroy: boolean;
    isSuccessFinanceDestroy: boolean;
    isErrorFinanceDestroy: boolean;
    dataFinanceDestroy: string | null;
    errorFinanceDestroy: string | null;
  };

  adminLogin: {
    //create
    isLoadingCreate: boolean;
    isSuccessCreate: boolean;
    isErrorCreate: boolean;
    dataCreate: any;
    errorCreate: string | null;

    //get
    isLoadingGet: boolean;
    isSuccessGet: boolean;
    isErrorGet: boolean;
    dataGet: any;
    errorGet: string | null;

    //getlist
    isLoadingGetList: boolean;
    isSuccessGetList: boolean;
    isErrorGetList: boolean;
    dataGetList: any;
    errorGetList: string | null;

    //update
    isLoadingUpdate: boolean;
    isSuccessUpdate: boolean;
    isErrorUpdate: boolean;
    dataUpdate: string | null;
    errorUpdate: string | null;

    //destroy
    isLoadingDestroy: boolean;
    isSuccessDestroy: boolean;
    isErrorDestroy: boolean;
    dataDestroy: string | null;
    errorDestroy: string | null;
  };

  order: {
    //create
    isLoadingCreate: boolean;
    isSuccessCreate: boolean;
    isErrorCreate: boolean;
    dataCreate: string | null;
    errorCreate: string | null;

    //get
    isLoadingGet: boolean;
    isSuccessGet: boolean;
    isErrorGet: boolean;
    dataGet: any;
    errorGet: string | null;

    //getlist
    isLoadingGetList: boolean;
    isSuccessGetList: boolean;
    isErrorGetList: boolean;
    dataGetList: any;
    errorGetList: string | null;

    //update
    isLoadingUpdate: boolean;
    isSuccessUpdate: boolean;
    isErrorUpdate: boolean;
    dataUpdate: string | null;
    errorUpdate: string | null;

    //destroy
    isLoadingDestroy: boolean;
    isSuccessDestroy: boolean;
    isErrorDestroy: boolean;
    dataDestroy: string | null;
    errorDestroy: string | null;
  };

  shipped: {
    //create
    isLoadingCreate: boolean;
    isSuccessCreate: boolean;
    isErrorCreate: boolean;
    dataCreate: string | null;
    errorCreate: string | null;

    //get
    isLoadingGet: boolean;
    isSuccessGet: boolean;
    isErrorGet: boolean;
    dataGet: any;
    errorGet: string | null;

    //getlist
    isLoadingGetList: boolean;
    isSuccessGetList: boolean;
    isErrorGetList: boolean;
    dataGetList: any;
    errorGetList: string | null;

    //update
    isLoadingUpdate: boolean;
    isSuccessUpdate: boolean;
    isErrorUpdate: boolean;
    dataUpdate: string | null;
    errorUpdate: string | null;

    //destroy
    isLoadingDestroy: boolean;
    isSuccessDestroy: boolean;
    isErrorDestroy: boolean;
    dataDestroy: string | null;
    errorDestroy: string | null;
  };

  courior: {
    //create
    isLoadingCreate: boolean;
    isSuccessCreate: boolean;
    isErrorCreate: boolean;
    dataCreate: string | null;
    errorCreate: string | null;

    //get
    isLoadingGet: boolean;
    isSuccessGet: boolean;
    isErrorGet: boolean;
    dataGet: any;
    errorGet: string | null;

    //getlist
    isLoadingGetList: boolean;
    isSuccessGetList: boolean;
    isErrorGetList: boolean;
    dataGetList: any;
    errorGetList: string | null;

    //update
    isLoadingUpdate: boolean;
    isSuccessUpdate: boolean;
    isErrorUpdate: boolean;
    dataUpdate: string | null;
    errorUpdate: string | null;

    //destroy
    isLoadingDestroy: boolean;
    isSuccessDestroy: boolean;
    isErrorDestroy: boolean;
    dataDestroy: string | null;
    errorDestroy: string | null;
  };

  productWishlist: {
    //create
    isLoadingCreate: boolean;
    isSuccessCreate: boolean;
    isErrorCreate: boolean;
    dataCreate: string | null;
    errorCreate: string | null;

    //get
    isLoadingGet: boolean;
    isSuccessGet: boolean;
    isErrorGet: boolean;
    dataGet: any;
    errorGet: string | null;

    //getlist
    isLoadingGetList: boolean;
    isSuccessGetList: boolean;
    isErrorGetList: boolean;
    dataGetList: any;
    errorGetList: string | null;

    //update
    isLoadingUpdate: boolean;
    isSuccessUpdate: boolean;
    isErrorUpdate: boolean;
    dataUpdate: string | null;
    errorUpdate: string | null;

    //destroy
    isLoadingDestroy: boolean;
    isSuccessDestroy: boolean;
    isErrorDestroy: boolean;
    dataDestroy: string | null;
    errorDestroy: string | null;
  };

  productAddToCart: {
    //create
    isLoadingCreate: boolean;
    isSuccessCreate: boolean;
    isErrorCreate: boolean;
    dataCreate: string | null;
    errorCreate: string | null;

    //get
    isLoadingGet: boolean;
    isSuccessGet: boolean;
    isErrorGet: boolean;
    dataGet: any;
    errorGet: string | null;

    //getlist
    isLoadingGetList: boolean;
    isSuccessGetList: boolean;
    isErrorGetList: boolean;
    dataGetList: any;
    errorGetList: string | null;

    //update
    isLoadingUpdate: boolean;
    isSuccessUpdate: boolean;
    isErrorUpdate: boolean;
    dataUpdate: string | null;
    errorUpdate: string | null;

    //destroy
    isLoadingDestroy: boolean;
    isSuccessDestroy: boolean;
    isErrorDestroy: boolean;
    dataDestroy: string | null;
    errorDestroy: string | null;
  };

  comment: {
    //create
    isLoadingCreate: boolean;
    isSuccessCreate: boolean;
    isErrorCreate: boolean;
    dataCreate: string | null;
    errorCreate: string | null;

    //get
    isLoadingGet: boolean;
    isSuccessGet: boolean;
    isErrorGet: boolean;
    dataGet: any;
    errorGet: string | null;

    //getlist
    isLoadingGetList: boolean;
    isSuccessGetList: boolean;
    isErrorGetList: boolean;
    dataGetList: any;
    errorGetList: string | null;

    //update
    isLoadingUpdate: boolean;
    isSuccessUpdate: boolean;
    isErrorUpdate: boolean;
    dataUpdate: string | null;
    errorUpdate: string | null;

    //destroy
    isLoadingDestroy: boolean;
    isSuccessDestroy: boolean;
    isErrorDestroy: boolean;
    dataDestroy: string | null;
    errorDestroy: string | null;

     //All destroy
     isLoadingAllDestroy: boolean;
     isSuccessAllDestroy: boolean;
     isErrorAllDestroy: boolean;
     dataAllDestroy: string | null;
     errorAllDestroy: string | null;
  };

  commonInternal: {
    addAttachment: File[];
    fileUrl: string[];
    currentPage: number;
    totalPages: number;
    rowsPerPage: number;
    showDeleteModel: boolean;
    isCollapsed: boolean;
    isCalenderOpen: boolean;
    // matches: { moduleId: number; permissionId: number; name: string }[];
    matches: any;
    highlightedIndex: number;
    roleSearchTerm: string;
    loading: boolean;
    errors: {
      addAttachment?: string;
    };
    search: {
      searchTerm?: any;
    };
    light: boolean;
    orderBy: string;
    orderDirection: string;
    isAddToCart:boolean
  };

  productInternal: {
    selectTab: string,
  },

  orderInternal: {
    selectTab: string,
  },

  addToCartInternal:{
    selectedProduct:any;
  },

  productApiData:{
    name: string,
    Longdesc: string,
    shortdesc: string,
    categoryId: string,
    subCategoryId: string,
    brandId: string,
    // minOrderQuantity: string,
    // maxOrderQuantity: string,
    // aggregateReviewValue: string,
    colorList: any,
    sizeList: any,
    prices:any,
    stocks: any,
    tagList: any,
    [key:string]:any
  }

}
