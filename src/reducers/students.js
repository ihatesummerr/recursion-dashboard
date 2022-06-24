import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { putStudent, getStudents, patchStudent } from "../api";


export const createStudent = createAsyncThunk(
    'students/createStudent',
    async (student) => {
        const { data } = await putStudent(student);
        return data;
    }
)

export const updateStudent = createAsyncThunk(
    'students/updateStudent',
    async ({ name, email, subscription, direction, phone}) => {
        const { data } = await patchStudent({ name, email, subscription, direction, phone})
        return data;
    }
)

export const fetchStudents = createAsyncThunk(
    'students/fetchStudents',
    async () => {
        const { data } = await getStudents();
        return data;
    }
)


const studentsSlice = createSlice({
    name: 'students',
    initialState: {
        students: []
    },
    extraReducers: {
        [createStudent.fulfilled]: (state, action) => {
            state.students = [...state.students, action.payload];
        },
        [fetchStudents.fulfilled]: (state, action) => {
            state.students = action.payload
        },
        [updateStudent.fulfilled]: (state, action) => {
            console.log(state);
            console.log(action);
            state.students = [... state.students.filter(student => student.email != action.payload.email), action.payload]
        }


    }
});

export default studentsSlice.reducer;