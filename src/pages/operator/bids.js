import React from 'react'
import { OperatorDataGridBids } from '@/components/DataGridOperator'
import { useFetch } from '../api/useFetch'
import OperatorLayout from '@/components/operatorLayout'

export default function BidsList() {
  const {loading, error} = useFetch('http://localhost:1337/api/bid-requests')

  if (loading) return (<Layout><p>Loading...</p></Layout>)
  if (error) return (<Layout><p>Error</p></Layout>)


  return (
    <OperatorLayout>
      <OperatorDataGridBids />
    </OperatorLayout>
  )
}
