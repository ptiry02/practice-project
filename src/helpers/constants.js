export const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
]

export const DUMMY_CART_ITEMS = [
  {
    id: 'c1',
    name: 'Sushi',
    amount: 2,
    price: 12.99,
  },
]

export const portalElement = document.getElementById('overlays')

export const defaultCartState = {
  items: [],
  totalAmount: 0,
}

export const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    let updatedItems
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    )
    const existingItem = state.items[existingItemIndex]
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      }
      updatedItems = [...state.items]
      updatedItems[existingItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }
  return defaultCartState
}
