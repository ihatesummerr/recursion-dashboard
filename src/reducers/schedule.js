import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { putEvent, patchEvent, getEvents, deleteEvent, getEventsByUser } from '../api'

export const fetchEvents = createAsyncThunk(
    'schedule/fetchEvents',
    async () => {
        const { data } = await getEvents();
        return data;
    }
)

export const fetchEventsByUser = createAsyncThunk(
    'schedule/fetchEventsByUser',
    async (user) => {
        console.log(user);
        const { data } = await getEventsByUser(user)
        return data;
    }
)

export const updateEvent = createAsyncThunk(
    'schedule/updateEvent',
    async (event) => {
        const { data } = await patchEvent(event);
        return data;
    }
)

export const createEvent = createAsyncThunk(
    'schedule/createEvent',
    async (newEvent) => {
        const { data } = await putEvent(newEvent);
        return data;
    }
)

export const removeEvent = createAsyncThunk(
    'schedule/removeEvent',
    async (event) => {
        const { data } = await deleteEvent(event.event_id);
        return data;
    }
)


const scheduleSlice = createSlice({
    name: 'schedule',
    initialState: {
        events: [],
    },
    reducers: {
        
    },
    extraReducers: {
        [fetchEvents.fulfilled]: (state, action) => {
            state.events = action.payload;
        },
        [fetchEventsByUser.fulfilled]: (state, action) => {
            state.events = action.payload;
        },
        [createEvent.fulfilled]: (state, action) => {
            state.events = [...state.events, action.payload]
        },
        [updateEvent.fulfilled]: (state, action) => {
            state.events = [... state.events.filter(event => event.event_id != action.payload.event_id), action.payload]
        },
        [removeEvent.fulfilled]: (state, action) => {
            state.events = state.events.filter(event => event.event_id != action.payload)
        }
    }
})


export default scheduleSlice.reducer;