export = Modal;
export as namespace Modal;

declare namespace Modal {
  interface AlertModalProps {
    title: string;
    message: string;
    confirmText?: string;
    confirmColor?: string;
    persistent?: boolean;
    onClose: () => void;
    onConfirm: () => void;
  }
}

export default Modal;
