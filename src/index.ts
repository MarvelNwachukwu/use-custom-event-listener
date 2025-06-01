import { useEffect } from "react";

/**
 * A custom React hook that manages event listener lifecycle for one or multiple custom events
 * @param eventNames - Single event name or array of event names to listen for
 * @param callback - The function to execute when any of the events are triggered
 * @example
 * ```tsx
 * // Single event
 * useCustomEventListener('dataRefresh', () => {
 *   refetchData();
 * });
 *
 * // Multiple events
 * useCustomEventListener(['dataRefresh', 'userUpdate'], () => {
 *   refetchData();
 * });
 * ```
 */
export function useCustomEventListener(
  eventNames: string | string[],
  callback: () => Promise<void> | void
) {
  useEffect(() => {
    const events = Array.isArray(eventNames) ? eventNames : [eventNames];
    const handleCustomEvent = async () => {
      await callback();
    };

    for (const eventName of events) {
      document.addEventListener(eventName, handleCustomEvent);
    }

    return () => {
      for (const event of events) {
        document.removeEventListener(event, handleCustomEvent);
      }
    };
  }, [eventNames, callback]);
}

/**
 * A utility function that dispatches one or multiple custom events to the document
 * @param eventNames - Single event name or array of event names to dispatch
 * @example
 * ```tsx
 * // Single event
 * dispatchCustomEvents('dataRefresh');
 *
 * // Multiple events
 * dispatchCustomEvents(['dataRefresh', 'userUpdate']);
 * ```
 */
export function dispatchCustomEvent(eventNames: string | string[]) {
  const events = Array.isArray(eventNames) ? eventNames : [eventNames];
  for (const eventName of events) {
    const customEvent = new CustomEvent(eventName);
    document.dispatchEvent(customEvent);
  }
}
