/* import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'; */
import { MOCK_RESTAURANTS } from 'helpers/general/constants';
import { setupWorker, rest } from 'msw';
/* const mock = new MockAdapter(axios);

mock.onGet('/api/v2/restaurants').reply(200, { damn: MOCK_RESTAURANTS });

axios.get('/api/v2/restaurants').then(function (response) {
  console.log(response.data);
  return response.data;
}); */

interface LoginBody {
  username: string;
}
interface LoginResponse {
  username: string;
  firstName: string;
}
export const worker = setupWorker(
  rest.get('/api/v2/restaurants', (req, res, ctx) => {
    return res(ctx.json(MOCK_RESTAURANTS), ctx.status(200));
  }),
  rest.post<LoginBody, LoginResponse>('/login', (req, res, ctx) => {
    const { username } = req.body;
    return res(
      ctx.json({
        username,
        firstName: 'John',
      }),
      ctx.status(200),
    );
  }),
);
