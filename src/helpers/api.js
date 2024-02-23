export function submitLoginForm({ email, password }) {
 return fetch('https://aiundetectable.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => {

      if (response.ok) {
        return response.json();
      } else {
        return response.json().then((data) => {
          throw new Error(data.error);
        });
      }
    })
    .then((data) => {
      localStorage.setItem('user', JSON.stringify(data.user));
      return data
  })    
}


export async function submitSignupForm(formdata) {
  fetch('https://aiundetectable.com/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: formdata.username,
      email: formdata.email,
      password: formdata.password,
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then((data) => {
          throw new Error(data.error);
        });
      }
    })
}

export async function logout() {
  const response = await fetch("https://aiundetectable.com/logout", {
    method: "POST",
  })
  .then((response) => {
    if (response.ok) {
      localStorage.clear();
    } else {
      return response.json().then((data) => {
        throw new Error(data.error);
      });
    }
  })
}