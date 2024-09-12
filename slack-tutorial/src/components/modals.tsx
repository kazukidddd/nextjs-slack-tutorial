"use client";

import {
  CreateWorkspaceModal
} from "@/feature/workspaces/components/create-workspace-modal";
import { useEffect, useState } from "react";

export const Modals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <CreateWorkspaceModal />
    </>
  );
}