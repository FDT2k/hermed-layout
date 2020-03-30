import React from 'react'

import { useFormik } from 'formik';
import Button from 'components/Button'
import Input from 'components/Input'
import Form from 'components/Form'

export default props => {
  const {handleSubmit} = props;
  const formik = useFormik({
    initialValues: {
      server: 'broker.hermed.dev.geekagency.ch',
      port: 8712,
      key: 'peerjs',
      organiser_name: '',
      password: '',
      secure:true
    },
    onSubmit: values => {

      handleSubmit(values)
    },
  });
  return (
    <Form className="flex-column align-center" onSubmit={formik.handleSubmit}>
      <Input label="Votre nom " name="organiser_name" placeholder="Votre nom complet" autoComplete="off" onChange={formik.handleChange} value={formik.values.organiser_name}/>
      <Input label="Serveur" name="server" placeholder="broker.cmgl.ch" autoComplete="off" onChange={formik.handleChange} value={formik.values.server}/>
      <Input label="Port" name="port" placeholder="8712" autoComplete="off" onChange={formik.handleChange} value={formik.values.port}/>
      <label htmlFor="secure">SSL</label>
      <input type="checkbox"  id="secure" name="secure" onChange={formik.handleChange} checked={formik.values.secure}/>
      <Input label="Clé" name="key" placeholder="clé du serveur" autoComplete="off" onChange={formik.handleChange} value={formik.values.key}/>
      <Button>Se connecter</Button>
    {/*  <p className="label"> Vous n'avez pas de compte ?</p>
      <Button text>Hello world</Button>*/}
    </Form>
  )
}
