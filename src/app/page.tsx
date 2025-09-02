import FocusTree from "@/components/focus-tree";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <FocusTree />
    </Suspense>
  );
}
