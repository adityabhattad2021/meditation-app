// polyfills.ts
if (typeof (global as any).DOMException === 'undefined') {
  (global as any).DOMException = class DOMException extends Error {
    constructor(message?: string, name?: string) {
      super(message);
      this.name = name || 'Error';
    }
  };
}

// Use require, NOT import — require respects code order
const { registerGlobals } = require('@livekit/react-native');
registerGlobals();