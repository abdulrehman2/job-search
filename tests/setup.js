import { cleanup } from '@testing-library/vue'
import '@testing-library/jest-dom';
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
});
