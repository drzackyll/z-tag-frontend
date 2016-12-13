import $ from 'jquery'

export function login(username, password) {
  const promise = $.ajax({
    url: "https://powerful-plateau-91528.herokuapp.com/sessions",
    type: "POST",
    data: JSON.stringify({auth: {username, password}}),
    contentType: "application/json; charset=utf-8",
    dataType: "json"
  })

  return {
    type: "LOGIN",
    payload: promise
  }
}

export function logout() {
  return {
    type: "LOGOUT"
  }
}
