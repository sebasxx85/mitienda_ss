import React from 'react'
import ItemCount from './ItemCount'

export default function ItemListContainer(props) {
  return (
      <>
    <h2>{props.greet}</h2>
    <ItemCount stock = {5} initial = {1} />
    </>
  )
}
