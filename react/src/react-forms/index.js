import React from 'react'

function MyForm (props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          onChange={props.onChange}
          placeholder='John Doe'
          value={props.name}
        />
      </div>
      <div>
        <label htmlFor='framework'>Framework</label>
        <select
          id='framework'
          name='framework'
          onChange={props.onChange} value={props.framework}>
          <option value=''>Choose a framework</option>
          {props.frameworks.map((framework) => <option key={framework} value={framework}>{framework}</option>)}
        </select>
      </div>
      <div>
        {
          props.identations.map(identation => {
            return (
              <label key={identation}>
                {identation}
                <input name='identation' type='radio' value={identation}
                  checked={props.identation === identation}
                  onChange={props.onChange} />
              </label>
            )
          })
        }
      </div>
      <div>
        <label>
          Do you like dogs?
          <input
            name='likeDogs'
            type='checkbox'
            checked={props.likeDogs}
            onChange={props.onChange} />
        </label>
      </div>
      <div>
        <label>
          Do you like cats?
          <input
            name='likeCats'
            type='checkbox'
            checked={props.likeCats}
            onChange={props.onChange} />
        </label>
      </div>
      <div>
        <input type='submit' value='Enviar' />
      </div>
    </form>
  )
}

export default class ContactForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      framework: '',
      frameworks: ['react', 'vue'],
      identation: '',
      identations: ['spaces', 'tabs'],
      likeDogs: false,
      likeCats: false,
      onChange: this.onChange.bind(this),
      onSubmit: this.onSubmit.bind(this)
    }
  }

  onSubmit (event) {
    event.preventDefault()
    console.log(this.state)
  }

  onChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render () {
    return (<MyForm {...this.state} />)
  }
}
