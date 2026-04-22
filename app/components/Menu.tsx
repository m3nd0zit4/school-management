import Link from "next/link";
import { menuSections, type UserRole } from "@/app/config/menu-items";

type MenuProps = {
  /** Pass from layout or auth when you have the signed-in role. */
  role?: UserRole;
};

export default function Menu({ role = "admin" }: MenuProps) {
  const sections = menuSections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => item.visible.includes(role)),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <nav className="mt-6 flex flex-col gap-6 text-sm">
      {sections.map((section) => (
        <div key={section.title}>
          <p className="mb-2 hidden text-xs font-semibold uppercase tracking-wide text-gray-400 lg:block">
            {section.title}
          </p>
          <ul className="flex flex-col gap-1">
            {section.items.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-center gap-3 rounded-md px-2 py-2 hover:bg-gray-200 lg:justify-start"
                  >
                    <Icon className="size-5 shrink-0 opacity-90" aria-hidden />
                    <span className="hidden lg:inline text-gray-500">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
