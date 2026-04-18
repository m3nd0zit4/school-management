export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen flex">
        <div className="w-[14%] bg-blue-500"> l </div>
        <div className="w-[86%] bg-red-500"> r {children}</div>
      </div>
    );
  }