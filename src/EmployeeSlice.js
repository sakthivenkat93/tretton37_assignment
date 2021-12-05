import { createSlice } from '@reduxjs/toolkit'

export const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    value: null,
    // filterName: null,
    // filterOffice: null
  },
  reducers: {
    setEmployees: (state, action) => {
        state.value = action.payload;
    },
    // setFilterName: (state, action) => {
    //     state.filterName = action.payload;
    // },
    // setFilterOffice: (state, action) => {
    //     state.filterOffice = action.payload;
    // }
  }
})

// export const { setEmployees, setFilterName, setFilterOffice } = employeeSlice.actions

export const { setEmployees } = employeeSlice.actions

export default employeeSlice.reducer