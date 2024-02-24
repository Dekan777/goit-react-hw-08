import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacsSlice';
import { filtersReducer } from './contacts/filtersSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
    },
});
