const initialState = {
  listBuku: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false
};

const buku = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BUKU_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
            case 'GET_BUKU_REJECTED':
                return{
                    ...state,
                    isLoading: false,
                    isRejected: true,
                }
                case 'GET_BUKU_FULFILLED':
                    return{
                        ...state,
                        isLoading: false,
                        isFulfilled: true,
                        listBuku: action.payload.data
                    }
        default:
            return state
    }
}

export default buku