import {server} from './mocks/server'
import {beforeAll, afterAll, afterEach } from 'vitest';

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())