import {createSlice} from '@reduxjs/toolkit'

const flowersSlice = createSlice({
    name: 'flower',
    initialState:{
        cartItem:[]

    },
    reducers:{
        addCart : (el,action) => {
            const findProduct = el.cartItem.find((el) => el.id == action.payload.id)
            if (!findProduct){
                el.cartItem.push(action.payload)
            }
        }
    }
})

export const {addCart} = flowersSlice.actions
export default flowersSlice.reducer