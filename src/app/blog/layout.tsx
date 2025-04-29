// app/blog/layout.tsx
import React, { Suspense } from "react";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading blog post...</div>}>
      {children}
    </Suspense>
  );
}

