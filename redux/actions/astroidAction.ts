import * as types from './types'
import http from '../../utils/http'
import { Dispatch } from 'redux'

const key = 'azPC1mfu5hafmOYLc0albRGExtancUrePkB01D97'

export const StartSearchAstroid = (id: string) => (dispatch: Dispatch) => {
  http.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${key}`)
  .then(res => {
    dispatch({type: types.START_SEARCH_ASTROID, payload: res.data})
  })
  .catch(err => {
    console.log(err)
  })
}

export const StartRandomSearch = () => (dispatch: Dispatch) => {
  http.get(`browse?api_key=${key}`)
  .then(res => {
    const randomAstroidId = res.data.near_earth_objects[Math.floor(Math.random() * res.data.near_earth_objects.length)].id
    http.get(`https://api.nasa.gov/neo/rest/v1/neo/${randomAstroidId}?api_key=${key}`)
    .then(res => {
      dispatch({type: types.START_SEARCH_ASTROID, payload: res.data})
    })
  })
  .catch(err => {
    console.log(err)
  })
}
