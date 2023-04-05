import React from 'react'
import DataGridBid from '@/components/dataGrid'
import { useFetch } from '../api/useFetch'
import Layout from '@/components/contractorLayout'

export default function BidsList() {
  const {loading, error} = useFetch('http://localhost:1337/api/bid-requests')

  if (loading) return (<Layout><p>Loading...</p></Layout>)
  if (error) return (<Layout><p>Error</p></Layout>)


  return (
    <Layout>
      <DataGridBid />
    </Layout>
  )
}
