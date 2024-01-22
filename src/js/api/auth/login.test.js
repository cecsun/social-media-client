// import { login } from './login.js';
// import { save } from '../../storage/index.js';
// import { apiPath } from '../constants.js';
// import { headers } from '../headers.js';

// global.fetch = jest.fn();
// jest.mock('../../storage/index.js');

// test('login stores a token when provided with valid credentials', async () => {
//   global.fetch.mockResolvedValueOnce({
//     ok: true,
//     json: async () => ({ accessToken: 'test-token', otherData: 'otherData' }),
//   });

//   const email = 'test@example.com';
//   const password = 'password';

//   await login(email, password);

//   expect(global.fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
//     method: 'post',
//     body: JSON.stringify({ email, password }),
//     headers: headers('application/json'),
//   });

//   expect(save).toHaveBeenCalledWith('token', 'test-token');
//   expect(save).toHaveBeenCalledWith('profile', { otherData: 'otherData' });
// });
