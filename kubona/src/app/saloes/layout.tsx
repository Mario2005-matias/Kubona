import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
export default function SaloesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#fdfdfd]">
        <Header/>
        <>{children}</>
        <Footer/>
    </div>
);
}
