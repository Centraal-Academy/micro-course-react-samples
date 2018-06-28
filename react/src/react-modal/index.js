import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal'

class PortalModal extends React.Component {
  constructor (props) {
    super(props)
    this.modalRoot = document.getElementById('modal-container')
    this.modalContainer = document.createElement('div')
  }

  componentDidMount () {
    this.modalRoot.appendChild(this.modalContainer)
  }

  componentWillUnmount () {
    this.modalRoot.removeChild(this.modalContainer)
  }

  render () {
    return ReactDOM.createPortal(
      <Modal {...this.props} />,
      this.modalContainer
    )
  }
}

export default class MyModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      openModal: false
    }
    this._handleClick = this._handleClick.bind(this)
    this._closeModal = this._closeModal.bind(this)
  }

  _closeModal () {
    this.setState({
      openModal: false
    })
  }

  _handleClick (data) {
    this.setState({
      openModal: true
    })
  }

  render () {
    return (
      <div>
        <header>
          <h1>Modal Sample</h1>
        </header>
        <div onSubmit={this._handleSubmit}>
          <PortalModal header='Modal title' open={this.state.openModal} onClose={this._closeModal}>
            <h1>I'm a modal</h1>
          </PortalModal>
        </div>
        {!this.state.openModal ? <button onClick={this._handleClick}>Show modal</button> : null}
      </div>
    )
  }
}
