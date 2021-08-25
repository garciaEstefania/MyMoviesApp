import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_API = "https://reqres.in/api";

class api {
  async Auth(email, password){
    const response = await fetch(`${BASE_API}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const responseData = await response.json();

    return responseData;
  }
}

export default new api();
