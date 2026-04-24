import {
  BarChart3,
  BookMarked,
  BookOpen,
  Calendar,
  CalendarCheck,
  ClipboardList,
  FileQuestion,
  GraduationCap,
  Home,
  Layers,
  LogOut,
  Megaphone,
  MessageSquare,
  Settings,
  User,
  Users,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export type UserRole = "admin" | "teacher" | "student" | "parent";
type AnimatedIcon = ComponentType<HTMLAttributes<HTMLDivElement> & { size?: number }>;

export type MenuItem = {
  icon: AnimatedIcon;
  label: string;
  href: string;
  visible: UserRole[];
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    title: "MENU",
    items: [
      {
        icon: HomeIcon,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
    {
    title: "STAFF",
    items: [
      {
        icon: UsersIcon,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: UserRoundPlusIcon,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: UserIcon,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
    ],
  },
    {
    title: "CLASSES",
    items: [

      {
        icon: BookTextIcon,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: LayersIcon,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: ListIcon,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: CircleHelpIcon,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: ClipboardCheckIcon,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: ChartBarIncreasingIcon,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  }, 
    {
    title: "CALENDAR",
    items: [
      {
        icon: CalendarCheckIcon,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: CalendarDaysIcon,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: MessageSquareIcon,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: BellIcon,
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
    },
  {
    title: "OTHER",
    items: [
      {
        icon: UserIcon,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: SettingsIcon,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: LogoutIcon,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];
