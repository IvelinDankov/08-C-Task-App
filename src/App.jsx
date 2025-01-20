import { useState } from 'react';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import NewProject from './components/NewProject.jsx';

import ProjectSidebar from './components/ProjectSidebar.jsx';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAppProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;

  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAppProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAppProject}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
