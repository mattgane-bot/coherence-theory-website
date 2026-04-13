import { TheorySidebar } from "@/components/ui/TheorySidebar";
import { TheoryNav } from "@/components/ui/TheoryNav";

export default function TheoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex gap-12">
      <TheorySidebar />
      <div className="flex-1 min-w-0">
        {children}
        <TheoryNav />
      </div>
    </div>
  );
}
