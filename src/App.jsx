import Home from './pages/Home';
import Bio from './pages/Bio';
import Error from './pages/Error'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/bio",
    element: <Bio/>
  },
  {
    path: '*',
    element: <Error/>
  }
])

function App() {
  return (
    <>
      <RouterProvider
        router={router}
      />
    </>
  );
}

export default App;
