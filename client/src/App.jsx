import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider
} from 'react-router-dom';
import { Home, Login, SignUp } from './pages';
import { Footer, Header } from './layouts';


const App = () => {
  const fakeLogin = true;

  const Layout = () => {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const ProtectRouter = ({ children }) => {
    return (!fakeLogin)
      ? <Navigate to='/login' />
      : children;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectRouter><Layout /></ProtectRouter>,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signUp',
      element: <SignUp />
    },
  ]);
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
};

export default App;