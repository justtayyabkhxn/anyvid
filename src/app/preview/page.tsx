// app/preview/page.tsx
import { Suspense } from "react";
import PreviewClient from "../../components/PreviewClient";

export default function PreviewPageWrapper() {
  return (
    <Suspense fallback={<div className="text-white text-center mt-20">Loading...</div>}>
      <PreviewClient />
    </Suspense>
  );
}
