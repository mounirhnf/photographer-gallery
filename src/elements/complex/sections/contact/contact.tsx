import React from 'react';
import {Store} from 'store/types';

import {useDispatch, useSelector} from 'react-redux';

import {setContactFormValue, submitContactForm} from 'store/actions';

import FormElement from 'elements/complex/form-element';
import Button from 'elements/complex/button';

import {
  FaUserAlt as NameIcon,
  FaEnvelope as EmailIcon,
  FaQuestion as SubjectIcon,
  FaTelegramPlane as SendIcon,
} from 'react-icons/fa';

import cls from './contact.module.scss';

//------------------------------------------------------------------------------

const Contact: React.FC = () => {
  const form = useSelector((store: Store.State) => store.contactForm);
  const dispatch = useDispatch();

  const {
    isSubmitting,
    values: message,
  } = form;

  const onFormUpdate = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setContactFormValue(event.target.name, event.target.value));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(submitContactForm(message));
  };


  return (
    <div className={cls['root']}>
      <form className={cls['form']} onSubmit={handleSubmit}>
        <FormElement
          id='name'
          type='text'
          label='Name'
          icon={NameIcon}
          placeholder={'What\'s your name ?'}
          value={message.name}
          required
          disabled={isSubmitting}
          autoFocus
          onChange={onFormUpdate}
        />
        <FormElement
          id='email'
          type='email'
          label='Email'
          icon={EmailIcon}
          placeholder={'What\'s your email ?'}
          value={message.email}
          required
          disabled={isSubmitting}
          onChange={onFormUpdate}
        />
        <FormElement
          id='subject'
          type='text'
          label='Subject'
          icon={SubjectIcon}
          placeholder={'What\'s this message about ?'}
          value={message.subject}
          required
          disabled={isSubmitting}
          onChange={onFormUpdate}
        />
        <FormElement
          id='message'
          label='Message'
          type='area'
          placeholder='Describe your message here...'
          value={message.message}
          required
          disabled={isSubmitting}
          onChange={onFormUpdate}
        />
        <Button
            className={cls['send-btn']}
            type='submit'
            disabled={isSubmitting}
            icon={SendIcon}>
          {!isSubmitting ? 'Send Message' : 'Sending...'}
        </Button>
      </form>
    </div>
  );
}

//------------------------------------------------------------------------------

export default Contact;
