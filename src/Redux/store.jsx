// store.js
import { configureStore } from '@reduxjs/toolkit';
import loginSlice from "./Reducers/AuthSlice";
// import SpeakingSlice from "../Redux/Reducers/SpeakingSlice";
// import GetProfileDataSlice from "../Redux/Reducers/ProfileSlice";
// import WrittingSlice from '../Redux/Reducers/WrittingSlice';
// import ReadingSlice from "../Redux/Reducers/ReadingSlice";
// import ListeningSlice from './Reducers/ListeningSlice';
// import MocktestSlice from './Reducers/MocktestSlice';

export const store = configureStore({
  reducer: {
    login: loginSlice,
    // readAloudData: SpeakingSlice,
    // UserProfileData: GetProfileDataSlice,
    // SummWrittingData: WrittingSlice,
    // ReadingData: ReadingSlice,
    // ListeningData: ListeningSlice,
    // MocktestData: MocktestSlice
  },
});
