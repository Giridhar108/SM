const initialState = {
  kind: null,
  style: null,
  cloth: null,
  color: null,
  filler: null,
  count: 0,
  deleteItems: 0,
  countItems: 0,
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
    case "SET_COUNT_ITEMS":
      return {
        ...state,
        countItems: action.payload,
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
    case "PLUS_ORDER": {
      const newItems = [
        ...state.orderItems
          .map((item) => {
            if (item && item.number === action.payload) {
              item.count = item.count + 1;
              return item;
            }
          })
          .filter((item) => item),
      ];
      return {
        ...state,
        orderItems: newItems,
      };
    }
    case "MINUS_ORDER": {
      const newItems = [
        ...state.orderItems
          .map((item) => {
            if (item && item.number === action.payload) {
              item.count = item.count > 1 ? item.count - 1 : item.count;
              return item;
            }
          })
          .filter((item) => item),
      ];
      return {
        ...state,
        orderItems: newItems,
      };
    }
    case "RESET_CALC": {
      return {
        ...state,
        kind: null,
        style: null,
        cloth: null,
        color: null,
        filler: null,
        count: 0,
      };
    }
    case "ORDER_ITEMS": {
      const newItem = state.orderItems;
      newItem.push(action.payload);
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
    case "DELETE_ORDER_ITEMS": {
      const newItems = state.orderItems.filter((item) => {
        if (item) {
          return item.number !== action.payload;
        }
      });
      const countDelete = state.deleteItems + 1;
      return {
        ...state,
        deleteItems: countDelete,
        orderItems: newItems,
      };
    }
    default:
      return state;
  }
};

export default calculator;
