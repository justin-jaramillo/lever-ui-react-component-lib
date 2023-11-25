export interface AlertProps {
  type: "error" | "success" | "warning";
  message: string;
  onClose: () => void;
}
