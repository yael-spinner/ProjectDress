import { router } from './routes/router'
import { RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from './redux/store'
import InitializedAuth from './auth/InitializedAuth';

function App() {
  return (
    <Provider store={store}>
      <InitializedAuth />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
