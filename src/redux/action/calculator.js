export const setKind = (name) => ({
  type: "SET_KIND",
  payload: name,
});

export const setStyle = (name) => ({
  type: "SET_STYLE",
  payload: name,
});

export const setCloth = (name) => ({
  type: "SET_CLOTH",
  payload: name,
});

export const setColor = (name) => ({
  type: "SET_COLOR",
  payload: name,
});

export const setFiller = (name) => ({
  type: "SET_FILLER",
  payload: name,
});

export const sendToOrder = (name) => ({
  type: "SEND_TO_ORDER",
  payload: name,
});

export const addItem = () => ({
  type: "PLUS",
  payload: 1,
});

export const reduceItem = () => ({
  type: "MINUS",
  payload: 1,
});

export const addItemOrder = (number) => ({
  type: "PLUS_ORDER",
  payload: number,
});

export const reduceItemOrder = (number) => ({
  type: "MINUS_ORDER",
  payload: number,
});

export const setOrderItems = (item) => ({
  type: "ORDER_ITEMS",
  payload: item,
});

export const delateOrderItems = (item) => ({
  type: "DELETE_ORDER_ITEMS",
  payload: item,
});

