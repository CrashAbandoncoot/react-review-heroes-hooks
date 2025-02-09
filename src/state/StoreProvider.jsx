import { Provider } from 'react-redux';
import store from './store.js';



export function StoreProvider({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}