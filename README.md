# use-custom-event-listener

A lightweight React hook for managing custom DOM events with TypeScript support. This package provides a simple and type-safe way to handle custom events in your React applications.

## Features

- 🎯 TypeScript support
- 🔄 Support for single or multiple event listeners
- 🧹 Automatic cleanup of event listeners
- ⚡️ Async callback support
- 🎨 Simple and intuitive API
- 📦 Zero dependencies

## Installation

```bash
pnpm add use-custom-event-listener
```

## Usage

### Basic Usage

```tsx
import { useCustomEventListener, dispatchCustomEvent } from 'use-custom-event-listener';

function MyComponent() {
  useCustomEventListener('dataRefresh', () => {
    // Handle the custom event
    console.log('Data refresh event received!');
  });

  return (
    <button onClick={() => dispatchCustomEvent('dataRefresh')}>
      Refresh Data
    </button>
  );
}
```

### Multiple Events

```tsx
import { useCustomEventListener, dispatchCustomEvent } from 'use-custom-event-listener';

function MyComponent() {
  useCustomEventListener(['dataRefresh', 'userUpdate'], () => {
    // Handle multiple custom events
    console.log('Event received!');
  });

  return (
    <div>
      <button onClick={() => dispatchCustomEvent('dataRefresh')}>
        Refresh Data
      </button>
      <button onClick={() => dispatchCustomEvent('userUpdate')}>
        Update User
      </button>
    </div>
  );
}
```

### Async Callbacks

```tsx
import { useCustomEventListener, dispatchCustomEvent } from 'use-custom-event-listener';

function MyComponent() {
  useCustomEventListener('dataRefresh', async () => {
    // Handle async operations
    await fetchData();
    await updateUI();
  });

  return (
    <button onClick={() => dispatchCustomEvent('dataRefresh')}>
      Refresh Data
    </button>
  );
}
```

## API Reference

### `useCustomEventListener`

A React hook that manages event listener lifecycle for one or multiple custom events.

```typescript
useCustomEventListener(
  eventNames: string | string[],
  callback: () => Promise<void> | void
)
```

#### Parameters

- `eventNames`: A single event name or an array of event names to listen for
- `callback`: The function to execute when any of the events are triggered. Can be async.

### `dispatchCustomEvent`

A utility function that dispatches one or multiple custom events to the document.

```typescript
dispatchCustomEvent(eventNames: string | string[])
```

#### Parameters

- `eventNames`: A single event name or an array of event names to dispatch

## Best Practices

1. **Event Naming**: Use descriptive and unique event names to avoid conflicts
2. **Cleanup**: The hook automatically cleans up event listeners when the component unmounts
3. **Performance**: Consider using multiple event names instead of creating multiple hooks
4. **Type Safety**: Leverage TypeScript for better type checking and IDE support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Marvellous Nwachukwu 