import React, { useState, useEffect } from "react";
import SchedulingSection from "../components/SchedulingSection/SchedulingSection";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <SchedulingSection />;
    </>
  );
}
