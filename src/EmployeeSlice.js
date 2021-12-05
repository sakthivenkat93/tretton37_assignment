import { createSlice } from '@reduxjs/toolkit'

export const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    value: null,
  },
  reducers: {
    setEmployees: (state, action) => {
        state.value = action.payload;
    },
  }
})

export const { setEmployees } = employeeSlice.actions

export default employeeSlice.reducer