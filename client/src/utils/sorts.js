export const mapOrder = (originalArray, orderArray, key) => {
  if (!originalArray || !orderArray || !key) return []
  return [...originalArray].sort((a, b) => orderArray.indexOf(a[key]) - orderArray.indexOf(b[key]))
}

export const newMapOrder = (originalArray, orderArray) => {
  if (!originalArray || !orderArray) return []
  return orderArray.map(item => ({
    _id: item,
    ...originalArray.find(element => element._id === item)
  }))
}