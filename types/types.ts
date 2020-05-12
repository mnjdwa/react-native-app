export interface Astroid {
  name: any,
  nasa_jpl_url: string,
  is_potentially_hazardous_asteroid: boolean
}
export interface AstroidState {
  astroid: Astroid
}
export interface Storetype {
  astroidState: AstroidState
}
type Payload = Astroid[]
export type AstroidSearch = {
  type: 'START_SEARCH_ASTROID'
  payload: Payload
}