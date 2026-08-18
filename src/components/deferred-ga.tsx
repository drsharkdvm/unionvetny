"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

/**
 * Loads Google Analytics only once the browser goes idle, so its ~300KB of
 * script download + execution doesn't run inside the initial load window and
 * inflate Total Blocking Time / add long main-thread tasks. It still renders
 * the real @next/third-parties <GoogleAnalytics>, so once mounted it tracks the
 * initial page_view and every client-side route change as usual — only the
 * load timing changes (a second or two later, on idle).
 */
export function DeferredGA({ gaId }: { gaId: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = () => setReady(true);
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    if (typeof w.requestIdleCallback === "function") {
      w.requestIdleCallback(start, { timeout: 4000 });
      return;
    }
    const t = setTimeout(start, 2500);
    return () => clearTimeout(t);
  }, []);

  if (!ready) return null;
  return <GoogleAnalytics gaId={gaId} />;
}
