export const deleteItem = (Items, id) => {
  let data = Items.filter((item) => item.id !== id);
  return data;
};

export const updateItem = (Items,obj) => {
    let data = Items.map((item) => {
        if (item.id == obj.id) {
            return obj;
        }
        else {
            return item;
        }
    })
    return data;
}