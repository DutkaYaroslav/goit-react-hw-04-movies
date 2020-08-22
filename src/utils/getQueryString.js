import queryString from "query-string"

export default function QueryString(search) {
  return queryString.parse(search)
}
