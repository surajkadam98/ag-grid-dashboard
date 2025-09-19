import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { HomeIcon, InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: false },
  { name: "About", href: "/about", icon: InformationCircleIcon, current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile sidebar */}
      <Dialog
        open={isOpen}
        onClose={onClose}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button
                  type="button"
                  onClick={onClose}
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                </button>
              </div>
            </TransitionChild>

            {/* Sidebar component */}
            <div className="flex grow flex-col overflow-y-auto bg-background px-6 py-8">
              <div className="flex h-16 shrink-0 items-center mb-8">
                <div className="flex items-center gap-3">
                  <img
                    src="/img/factwise-logo.png"
                    alt="Factwise Logo"
                    className="h-8 w-8 rounded"
                  />
                  <span className="text-primary-700 font-bold text-lg">
                    Factwise
                  </span>
                </div>
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="space-y-1">
                      {navigation.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              onClick={onClose}
                              className={classNames(
                                isActive
                                  ? "bg-primary-600 text-white"
                                  : "text-gray-700 hover:bg-gray-100",
                                "group flex gap-x-3 rounded-lg px-3 py-2 text-sm font-medium"
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  isActive
                                    ? "text-primary-foreground"
                                    : "text-muted-foreground group-hover:text-foreground",
                                  "size-5 shrink-0"
                                )}
                              />
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              </nav>

            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col overflow-y-auto bg-background border-r border-border px-5 py-2 2xl:py-5">
          <div className="flex h-16 shrink-0 items-center mb-8">
            <div className="flex items-center gap-3">
              <img
                src="/img/factwise-logo.png"
                alt="Factwise Logo"
                className="h-8 w-8 rounded"
              />
               <span className="text-primary-700 font-bold text-lg">
                 Factwise
               </span>
            </div>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="space-y-1">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className={classNames(
                              isActive
                                ? "bg-primary-600 text-white"
                                : "text-gray-800  hover:bg-indigo-100 ",
                            "group flex gap-x-3 rounded-lg px-3 py-2 text-sm font-medium"
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              isActive
                                ? "text-primary-foreground"
                                : "text-muted-foreground group-hover:text-foreground",
                              "size-5 shrink-0"
                            )}
                          />
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </nav>
          <div className="mt-auto space-y-3">
            {/* User Profile */}
            <div className="flex justify-between items-center gap-x-4 px-3 py-3 text-sm font-medium text-gray-900 cursor-pointer border-t border-gray-200 pt-3">
              <div className="flex items-center gap-x-2">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                  className="size-8 rounded-full"
                />
                <span>Suraj Kadam</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
