import { useRef } from "react";

const safeDocument = typeof document !== "undefined" ? document : {};

/**
 * Usage:
 * const [blockScroll, allowScroll] = useScrollBlock();
 */
export default () => {
  const scrollBlocked = useRef();
  const { body } = safeDocument;

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) return;
    body.style.overflow = "hidden";
    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) return;

    body.style.overflow = "auto";

    scrollBlocked.current = false;
  };

  return [blockScroll, allowScroll];
};
