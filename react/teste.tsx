import React from 'react'

type Props = {
  name: string
}

function bannerroll({ name }: Props) {
  return <div>Hey, {name}</div>
}

export default bannerroll
