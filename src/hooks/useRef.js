import { useState } from "react";

export default function useRef(initialState) {
  const [ref] = useState({ current: initialState });
  return ref;
}
