import React from "react"

const Review = ({reviewinfo}) => (
  <ul>
    {reviewinfo.map(info => (
      <li key={info.id}>
        <h3>{info.author}</h3>
        <p>{info.content}</p>
      </li>
    ))}
  </ul>
)

export default Review
