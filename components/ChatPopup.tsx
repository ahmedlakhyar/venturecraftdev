import { AnimatePresence } from "framer-motion";
import ChatPopupModal from "./ChatPopupModal";

export default function ChatPopup({ open, onClose }) {

  return (
    <AnimatePresence>
      {open && (
      <ChatPopupModal onClose={onClose} />
      )}
    </AnimatePresence>
  );
}
