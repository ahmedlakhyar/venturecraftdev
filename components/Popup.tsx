import { AnimatePresence } from "framer-motion";
import PopupModal from "./PopupModal";

export default function Popup({ open, onClose }) {

  return (
    <AnimatePresence>
      {open && (
      <PopupModal onClose={onClose} />
      )}
    </AnimatePresence>
  );
}
