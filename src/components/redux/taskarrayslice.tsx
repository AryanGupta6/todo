import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import App from '../../App'

export interface CounterState {
   task: string,
   completed:boolean
}


const initialState  = {
  arr : [] as CounterState[]
}

export const counterSlice = createSlice({
  name: 'arr',
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    addtoarray: (state, action: PayloadAction<string>) => {
        const prevstate=[...state.arr]
        prevstate.push({task:action.payload,completed:false})
        state.arr=prevstate;
        console.log(state.arr)
        // state.arr.push({task:action.payload,completed:false})
    },
    removefromarray: (state, action: PayloadAction<number>) => {
        const prevstate=[...state.arr]
        console.log(action.payload)
        const a=[...prevstate.slice(0,action.payload),...prevstate.slice(action.payload+1,state.arr.length)]
        state.arr=[...a];
        console.log(a)
        console.log(state.arr)
        // state.arr.push({task:action.payload,completed:false})
    },
    editinarray: (state, action: PayloadAction< {index:number, value :any}>) => {
        console.log("hit2")
        const prevstate=[...state.arr]
        prevstate.splice(action.payload.index,1)
        prevstate.splice(action.payload.index,0,{completed:prevstate[action.payload.index].completed,task:action.payload.value});
        state.arr=prevstate;
        console.log("inside function")
        console.log(state.arr)
        }
        // state.arr.push({task:action.payload,completed:false})
    }
  },
)

// Action creators are generated for each case reducer function
export const { addtoarray ,removefromarray,editinarray} = counterSlice.actions

export default counterSlice.reducer