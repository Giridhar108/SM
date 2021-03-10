const initialState = {
  kind: null,
  style: null,
  cloth: null,
  color: null,
  filler: null,
  count: 0,
  orderCount: 0,
  orderItems: [],
};

const calculator = (state = initialState, action) => {
  switch (action.type) {
    case "SET_KIND":
      return {
        ...state,
        kind: action.payload,
        count: 1,
      };
    case "SET_STYLE":
      return {
        ...state,
        style: action.payload,
      };
    case "SET_CLOTH":
      return {
        ...state,
        cloth: action.payload,
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.payload,
      };
    case "SET_FILLER":
      return {
        ...state,
        filler: action.payload,
      };
    case "PLUS": {
      const result = state.count + action.payload;
      return {
        ...state,
        count: result,
      };
    }
    case "MINUS": {
      if (state.count > 1) {
        const result = state.count - action.payload;
        return {
          ...state,
          count: result,
        };
      }
    }
    case "ORDER_ITEMS": {
      const newItem = state.orderItems
      newItem.push(action.payload)
      return {
        ...state,
        kind: null,
        style: null,
        cloth: null,
        color: null,
        filler: null,
        count: 0,
        orderItems: newItem,
      };
    }
    default:
      return state;
  }
};

export default calculator;
