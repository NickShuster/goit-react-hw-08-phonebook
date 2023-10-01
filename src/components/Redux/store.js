import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import authReducer from '../../utils/authReducer'; // Додайте редюсер для auth
import { fetchContacts } from './operations';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer, // Додайте редюсер для auth
  },
  middleware: [...getDefaultMiddleware()],
});

store.dispatch(fetchContacts());

export default store;