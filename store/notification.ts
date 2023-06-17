import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export type SF_Notification = {
  notifications: {
    type: "success" | "error" | "warning" | "info" | "open";
    message: string;
    description: string;
    placement?: "bottomRight" | "bottomLeft" | "topRight" | "topLeft";
  };
};

// Initial state
const initialState: SF_Notification = {
  notifications: {
    type: "info",
    message: "SkillFusion ",
    description: "loaded successfully",
    placement: "topRight",
  },
};

// Actual Slice
export const NotificationSlice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    // Action to set the authentication status
    setNotification(state, action) {
      state.notifications = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.notify,
      };
    },
  },
});

export const { setNotification } = NotificationSlice.actions;

export const selectNotificationState = (state: AppState) => state.notify.notifications;

export default NotificationSlice.reducer;
