import axios from 'axios';

/**
 * Send a get request to the api server.
 * @returns dids
 */

export async function getAccessCode(code) {
  try {
    const params = { kakao: 'kakao', google: 'google' };
    const res = await axios.post(
      `https://api.didtest.xyz/oauth/${
        code.length > 80 ? params.kakao : params.google
      }`,
      { authorizationCode: code },
      {
        headers: {
          accept: 'application/json',
        },
      }
    );
    return { data: res.data, status: res.status };
  } catch (error) {
    throw new Error(error);
  }
}
