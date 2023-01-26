import axios from 'axios';

const strapiUrl = process.env.NEXT_PUBLIC_URL;

export async function signInUser(
  {
    email,
    password
  }: any
) {
  const signInResponse = await axios.post(`${strapiUrl}/api/auth/local`, {
    identifier: email || '',
    password: password || '',
  });

  return signInResponse.data;
}
