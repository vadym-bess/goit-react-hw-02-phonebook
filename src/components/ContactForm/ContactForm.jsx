import React, {Component} from 'react';
//import { nanoid } from 'nanoid';
import clsx from 'clsx';
import css from './ContactForm.module.css'
export class ContactForm extends Component {
    
state = {
    name: '',
    number: ''
}
    
handleChangeName = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    }
    
handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
    
    
    render() {
        const { name } = this.state;

        return (<form onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                    <p>Name</p>
                    </label>
                <input
                       onChange={this.handleChangeName}
                       type="text"
                       name="name"
                       value={name}
                       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                       required
                />
                
                <label htmlFor="name" className="form-label">
                    <p>Number</p>
                    </label>
                <input
                      onChange={this.handleChangeName}
                      type="tel"
                      name="number"
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required
                />
                </div>
            
                <button className={clsx(css.submitButton)} type="submit">Add contact</button>
                </form>)
              }
            };