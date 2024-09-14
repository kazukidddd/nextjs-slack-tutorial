interface WorkspaceIdPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkSpaceIdPage = ({ params }: WorkspaceIdPageProps) => {
  return (
    <div>
      ID: {params.workspaceId}
    </div>
  );
}

export default WorkSpaceIdPage;