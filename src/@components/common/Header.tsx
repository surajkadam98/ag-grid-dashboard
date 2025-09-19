import { Bars3Icon } from '@heroicons/react/24/outline';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white dark:bg-secondary-900 border-b border-secondary-200 dark:border-secondary-700 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <button
        type="button"
        onClick={onMenuClick}
        className="-m-2.5 p-2.5 text-secondary-500 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="size-6" />
      </button>
      <div className="flex-1 text-sm/6 font-semibold text-secondary-900 dark:text-secondary-50">Dashboard</div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <a href="#" className="hover:opacity-80 transition-opacity">
          <span className="sr-only">Your profile</span>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="size-8 rounded-full bg-secondary-200 dark:bg-secondary-700 ring-1 ring-secondary-300 dark:ring-secondary-600"
          />
        </a>
      </div>
    </div>
  );
}
