import $ from 'jquery'

export function getScores(){
  const promise = $.ajax({
    url: "https://powerful-plateau-91528.herokuapp.com/scores",
    type: "GET",
    data: {jwt: localStorage.token},
    contentType: "application/json; charset=utf-8",
    dataType: "json"
  })

  return {
    type: "GET_SCORES",
    payload: promise
  }
}
