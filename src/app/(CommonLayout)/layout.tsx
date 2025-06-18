import Footer from "@/components/shared/Footer";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="min-h-screen bg-richBlack">
        {children}

        <Footer />
      </main>
    </>
  );
};

export default CommonLayout;
