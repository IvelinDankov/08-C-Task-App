import { useRef } from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx';

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // error Handling

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-500 mt-4 my-4 uppercase">
          This is Error Message
        </h2>
        <p className="text-stone-400 mb-4">Oops.. looks like you forgot to </p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="py-2 px-6 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md">
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input
            ref={title}
            label="title"
          />
          <Input
            ref={description}
            label="description"
          />
          <Input
            type="date"
            ref={dueDate}
            label="dueDate"
          />
        </div>
      </div>
    </>
  );
}
