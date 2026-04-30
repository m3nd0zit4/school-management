import Link from "next/link";
import Image from "next/image";
import Menu from "../components/Menu";
import NavBar from "../components/NavBar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen min-h-0">
        {/* Porcentajes en pantallas angostas dejan ~40px útiles; min-w garantiza espacio para el logo */}
        <aside className="no-scrollbar flex h-full w-[14%] min-w-20 shrink-0 flex-col overflow-y-auto p-3 sm:min-w-[5.25rem] sm:p-4 md:w-[8%] md:min-w-20 lg:min-w-[13rem] lg:w-[16%] xl:w-[14%]">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 lg:min-w-0 lg:justify-start"
          >
            <Image
              src="/image.png"
              alt="logo"
              width={40}
              height={40}
              className="h-10 w-10 min-h-10 min-w-10 shrink-0 object-contain"
              priority
            />
            <span className="hidden min-w-0 text-center text-sm leading-snug text-gray-900 lg:block lg:text-left">
              <span className="flex flex-col xl:hidden">
                <span>School</span>
                <span>Management</span>
              </span>
              <span className="hidden xl:inline">School Management</span>
            </span>
          </Link>
          <Menu />
        </aside>
        <div className="min-w-0 flex-1 overflow-y-auto bg-[#F7F8FA] flex flex-col">
          <NavBar />
          {children}
        </div>
      </div>
    );
  }