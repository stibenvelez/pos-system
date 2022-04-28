import { Outlet } from 'react-router-dom';
import SideBar from './components/ui/sidebar/SideBar';

const Layout = () => {
  return (
      <div className="bg-gray-50 flex w-full h-screen">
          <SideBar />
          <div className="bg-slate-800 h-full overflow-y-auto w-full p-4">
              <Outlet />
          </div>
      </div>
  );
}

export default Layout;