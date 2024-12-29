import { toast } from "react-toastify";

// Set up toast configuration

export const notify = (toastType: string, message: string) => {
  switch (toastType) {
    case "info":
      toast.info(message);
      break;
    case "success":
      toast.success(message);
      break;
    case "warning":
      toast.warning(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast.info(message);
      break;
  }
};
