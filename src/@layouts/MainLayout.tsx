import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../@components/common/Header';
import { Sidebar } from '../@components/common/Sidebar';

export function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-full bg-background">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Header onMenuClick={() => setSidebarOpen(true)} isMenuOpen={sidebarOpen} />

      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
