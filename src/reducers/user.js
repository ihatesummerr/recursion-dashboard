import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authUser } from '../api';


export const loginUser = createAsyncThunk(
	'user/loginUser',
	async ({ login, password }) => {
		const { data } = await authUser(login, password)
		return data;
	}
)


export const userSlice = createSlice({
	name: 'user',
	initialState: {
		id: null,
		role: null,
		user: null,
	},
	reducers: {
		
	},
	extraReducers: {
		[loginUser.fulfilled]: (state, action) => {
			const user = action.payload;
			state.id = user._id.$oid;
			state.role = user.role.name;
			state.user = user;
		}
	}
});


export default userSlice.reducer;
