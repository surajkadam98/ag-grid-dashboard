import { Bars3Icon } from '@heroicons/react/24/outline';

interface HeaderProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white border-b border-gray-200 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <button
        type="button"
        onClick={onMenuClick}
        className="-m-2.5 p-2.5 text-gray-500 hover:text-gray-700 transition-colors lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="size-6" />
      </button>
      <div className="flex-1 text-sm/6 font-semibold text-gray-900">Dashboard</div>
      <div className="flex items-center gap-2">
        <a href="#" className="hover:opacity-80 transition-opacity">
          <span className="sr-only">Your profile</span>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="size-8 rounded-full bg-gray-200 ring-1 ring-gray-300"
          />
        </a>
      </div>
    </div>
  );
}
