import type { ChangeEvent } from "react";

export function useIsInputNumber(
  event: ChangeEvent<HTMLInputElement>,
): boolean {
  const len = event.target.value.length;
  if (isNaN(parseInt(event.target.value[len - 1]))) {
    event.target.value = event.target.value.slice(0, -1);
    return false;
  }
  return true;
}
