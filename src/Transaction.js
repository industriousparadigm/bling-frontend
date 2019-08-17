import React from 'react'

const Transaction = ({ transaction: { amount, entity, category } }) => {
  return (
    <li className="h4 list-group-item expense d-flex">
      <span className="h1">{
        `$${Math.abs(amount)}`
      }</span>
      <span className="h6">{entity}</span>
      <span className="badge badge-pill badge-warning">{category}</span>

    </li>
  )
}

export default Transaction
