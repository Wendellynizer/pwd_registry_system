// src/components/Shared/DeleteConfirmationModal.tsx

interface DeleteConfirmationModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal = ({
  id,
  isOpen,
  onClose,
  onConfirm,
}: DeleteConfirmationModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full animate-bounce-in space-y-4">
        <h2 className="text-lg font-bold text-red-600">Confirm Deletion</h2>
        <p className="text-gray-700">
          Are you sure you want to delete the record with ID:{" "}
          <span className="font-semibold text-blue-600">{id}</span>?
        </p>
        <div className="flex justify-end gap-3 pt-4">
          <button onClick={onClose} className="btn btn-sm">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="btn btn-sm btn-error text-white"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
