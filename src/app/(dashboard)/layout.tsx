import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">

      {/* menu */}
      <div className="w-[20%] md:w-[14%] lg:w-[20%] p-4">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="logo" width={20} height={20}/>
          <span className="hidden lg:block">ShculVista</span>
        </Link>
        <Menu/>
      </div>
      {/* navbar */}
      <div className="w-[80%] md:w[86%] lg:w-[80%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
    
  );
}
