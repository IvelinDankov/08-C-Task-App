import Tasks from './Tasks';

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const selectedDate = new Date(project.dueDate).toLocaleDateString('eur', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={onDelete}
            className="mb-4 test-stone-400">
            Delete
          </button>
        </div>
        <div>
          <p className="mb-4 text-stone-400">{selectedDate}</p>
          <p className="text-stone-600 whitespace-pre-wrap">
            {project.description}
          </p>
        </div>
      </header>
      <Tasks
        onAdd={onAddTask}
        onDelete={onDeleteTask}
        tasks={tasks}
      />
    </div>
  );
}
