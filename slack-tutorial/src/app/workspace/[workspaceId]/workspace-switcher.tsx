"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useGetWorkspace } from "@/feature/workspaces/api/use-get-workspace";
import { useGetWorkspaces } from "@/feature/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModal } from "@/feature/workspaces/store/use-create-workspace-modal";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

export const WorkspaceSwitcher = () => {
  const workspaceId = useWorkspaceId();
  const [] = useCreateWorkspaceModal();


  const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace({ id: workspaceId });

  const { data: workspaces, isLoading: workspacesLoading } = useGetWorkspaces();

  const filteredWorkspaces = workspaces?.filter((workspace) => workspace?._id !== workspaceId);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 text-slate-800 font-semibold text-xl">
          A
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="start" className="w-64">

      </DropdownMenuContent>
    </DropdownMenu>
  );
}