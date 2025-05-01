import Navbar from "@/components/shared/Navbar";
const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />

      <main className="container mx-auto">{children}</main>
    </div>
  );
};

export default CommonLayout;
