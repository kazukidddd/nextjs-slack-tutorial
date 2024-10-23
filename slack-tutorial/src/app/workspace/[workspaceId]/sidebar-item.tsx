import { Button } from "@/components/ui/button";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { IconType } from "react-icons/lib";

interface SidebarItemProps {
  label: string;
  id: string;
  icon: LucideIcon | IconType
}

export const SidebarItem = ({
  label,
  id,
  icon: Icon,
}: SidebarItemProps) => {

  const workspaceId = useWorkspaceId();

  return (
    <Button
      variant="transparent"
      size="sm"
      asChild>
      <Link href={`/workspace/${workspaceId}/channel/${id}`}>
        <Icon />
        <span>{label}</span>
      </Link>
    </Button>
  );
}