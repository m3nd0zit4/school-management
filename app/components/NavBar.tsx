"use client";

import { Megaphone, MessageSquare, Search, User } from "lucide-react";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-10 flex w-full items-center gap-3 bg-transparent px-3 py-3 sm:gap-4 sm:px-4 md:px-6">
      {/* Búsqueda: ocupa espacio disponible a la izquierda, no empuja el grupo derecho */}
      <div className="min-w-0 flex-1">
        <label
          htmlFor="navbar-search"
          className="flex w-full max-w-full items-center gap-3 rounded-xl border border-gray-200/80 bg-transparent px-3 py-2.5 transition-colors focus-within:border-gray-300 focus-within:ring-2 focus-within:ring-gray-200/40 sm:max-w-md md:max-w-lg lg:max-w-xl"
        >
          <SearchIcon
            className="size-5 shrink-0 text-gray-400"
            aria-hidden
          />
          <input
            id="navbar-search"
            type="search"
            placeholder="Buscar..."
            className="min-w-0 flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
            autoComplete="off"
          />
        </label>
      </div>

      {/* Acciones alineadas juntas a la derecha */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-black/[0.04]"
          aria-label="Mensajes"
        >
          <MessageSquareIcon className="size-5" />
        </button>
        <button
          type="button"
          className="relative flex size-9 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-black/[0.04]"
          aria-label="Anuncios, 3 sin leer"
        >
          <BellIcon className="size-5" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold leading-none text-white">
            3
          </span>
        </button>

        <div
          className="mx-1 hidden h-8 w-px bg-gray-200 sm:block"
          aria-hidden
        />

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden min-w-0 text-right sm:block">
            <p className="truncate text-xs font-semibold leading-tight text-gray-900">
              John Doe
            </p>
            <p className="text-[10px] leading-tight text-gray-500">Admin</p>
          </div>
          <button
            type="button"
            className="flex size-9 shrink-0 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-black/[0.04]"
            aria-label="Cuenta de usuario"
          >
            <UserIcon className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
