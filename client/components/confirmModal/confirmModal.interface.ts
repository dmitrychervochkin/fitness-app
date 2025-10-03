export interface IConfirmModal {
    visible: boolean;
    title?: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void | Promise<void>;
    onCancel: () => void;

    loading?: boolean;
    confirmStyle?: "default" | "primary" | "danger";
    dismissOnBackdropPress?: boolean;
}
