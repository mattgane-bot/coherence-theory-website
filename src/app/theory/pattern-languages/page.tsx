import { ComingSoon } from "@/components/ui/ComingSoon";

export default function Page() {
  return (
    <article className="prose">
      <ComingSoon
        title="Pattern Languages"
        description="Recurring spatial, social, and organisational relationships that allow coherence to be reproduced and physically expressed in the world."
        domain="Application"
        domainColor="bg-inorganic"
      />
    </article>
  );
}
