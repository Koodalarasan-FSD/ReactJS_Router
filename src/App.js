import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import { Profile } from './components/Profile';
import { AuthProvider } from './components/Auth';
import { Login } from './components/Login';
import { RequiredAuth } from './components/RequiredAuth';

// React Router Playlist - https://www.youtube.com/playlist?list=PLC3y8-rFHvwjkxt8TOteFdT_YmzwpBlrG
// React Router - Installation and setup - https://www.youtube.com/watch?v=sLpmr5DtTRY
// React Router - Configuring Routes - https://www.youtube.com/watch?v=09dh_T-ZHl0

function App() {
  return (
    <AuthProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='order_summary' element={<OrderSummary />}></Route>
        <Route path='*' element={<NoMatch />}></Route>

        <Route path='products' element={<Products />}>
          {/* Below Index Route */}
          <Route index element={<FeaturedProducts />}></Route>
          <Route path='featured' element={<FeaturedProducts />}></Route>
          <Route path='new' element={<NewProducts />}></Route>
        </Route>

        <Route path='users' element={<Users />}></Route>

        {/*Below : means Dynamic Routes */}
        <Route path='users/:userId' element={<UserDetails />}></Route>

        <Route path='users/admin' element={<Admin />}></Route>
        <Route path='profile' element={<RequiredAuth><Profile /></RequiredAuth>}></Route>
        <Route path='login' element={<Login />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
