import {configureStore} from '@reduxjs/toolkit'
import flower from './FlowerSlice'

const myStore = configureStore({
    reducer:{
        flower:flower
    }
})
export default myStore