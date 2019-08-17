import React, { useEffect, useState } from 'react'
import Transaction from './Transaction'
import Zoom from 'react-reveal/Zoom'

const Transactions = () => {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/transactions')
      .then(resp => resp.json())
      .then(data => setTransactions(data))
  }, [])

  return (
    <div className="card">
      <Zoom right>
        <ul className="list-group list-group-flush">
          {
            transactions.length > 0 &&
            transactions.map(t => <Transaction transaction={t} key={t.id} />)
          }
        </ul>
      </Zoom>
    </div>
  )
}

export default Transactions
