import HomeContainer from '@/containers/HomeContainer'
import React from 'react'

class index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <HomeContainer
        {...this.state}
        {...this.props}
      />
    )
  }
}

export default index