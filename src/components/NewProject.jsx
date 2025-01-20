import Input from './Input.jsx';

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button className="py-2 px-6 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="title" />
        <Input label="description" />
        <Input label="dueDate" />
      </div>
    </div>
  );
}
