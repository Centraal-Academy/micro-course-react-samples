/* global GOOGLE_KEY */
import React from 'react'
import loadGoogleMapsAPI from 'load-google-maps-api'

class CustomMarker extends React.Component {
  componentDidUpdate (prevProps) {
    if ((this.props.map !== prevProps.map) ||
      (this.props.position !== prevProps.position)) {
      this.renderMarker()
    }
  }

  componentDidMount () {
    if (this.props.map && this.props.position && this.props.google) {
      this.renderMarker()
    }
  }

  componentWillUnmount () {
    if (this.marker) {
      this.marker.setMap(null)
    }
  }

  renderMarker () {
    let {
      map, google, position, mapCenter
    } = this.props

    let pos = position || mapCenter
    position = new google.LatLng(pos.lat, pos.lng)

    const pref = {
      map: map,
      position: position
    }
    this.marker = new google.Marker(pref)
  }

  render () {
    return null
  }
}

class Map extends React.Component {
  constructor (props) {
    super(props)
    this.mapRef = React.createRef()
    this.map = null
  }

  renderChildren () {
    const {children} = this.props

    if (!children) return null

    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.props.options.center
      })
    })
  }

  componentDidMount () {
    this.loadMap()
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap()
    }
  }
  loadMap () {
    if (this.props.google) {
      this.map = new this.props.google.Map(this.mapRef.current, this.props.options)
      this.forceUpdate()
    }
  }

  render () {
    return (
      <div ref={this.mapRef} {...this.props}>
        { this.props.google ? this.renderChildren() : 'Loading map' }
      </div>
    )
  }
}

class CustomMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      google: null
    }
  }
  componentDidMount () {
    loadGoogleMapsAPI(this.props.config)
      .then(googleMaps => {
        this.setState({
          google: googleMaps
        })
      })
      .catch(err => {
        console.warn('Something went wrong loading the map', err)
      })
  }

  render () {
    return (
      <Map {...this.state} {...this.props}>
        {this.props.children}
      </Map>
    )
  }
}

export default class MyMap extends React.Component {
  constructor (props) {
    super(props)
    this.config = {
      key: GOOGLE_KEY
    }
    this.style = {
      height: '450px',
      width: '100%'
    }
    this.options = {
      center: {
        lat: 20.675142,
        lng: -103.392753
      },
      zoom: 16
    }
  }

  render () {
    return (
      <div>
        <CustomMap config={this.config} style={this.style} options={this.options}>
          <CustomMarker />
        </CustomMap>
      </div>
    )
  }
}
