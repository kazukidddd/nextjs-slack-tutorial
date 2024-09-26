import { useWorkspaceId } from "@/hooks/use-workspace-id";

export const WorkspaceSidebar = () => {
  const workspaceId = useWorkspaceId();

  return (
    <div>Workspace Sidebar</div>
  )
};
