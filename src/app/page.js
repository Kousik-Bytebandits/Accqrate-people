import Hero from "@/components/Hero";
import Transform from "@/components/Transform";
import Cloud from "@/components/Cloud";
import HRPayrollSection from "@/components/Payroll";
import AutomationSection from "../components/Automatic";
export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Transform />
      <Cloud />
      <AutomationSection />
      <HRPayrollSection />
    </main>
  );
}
