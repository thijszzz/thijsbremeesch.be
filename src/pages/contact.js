import React from "react"
import { Layout } from "../components/Layout"
import { navigate } from "gatsby-link"
import SEO from "../components/seo"
import { encode } from "../lib"
import styles from "./contact.module.css"
import useForm from "react-hook-form"
import { regex } from "../lib/regex"

const FORM_NAME = "contact"

const ContactPage = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": FORM_NAME,
        ...data,
      }),
    })
      .then(() => navigate("/success"))
      .catch(error => console.error(error))
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <h2>Hello from the other side</h2>
      <p>Say hi 👋🏻</p>
      <form
        name={FORM_NAME}
        onSubmit={handleSubmit(onSubmit)}
        className={styles.formContainer}
      >
        <div className={styles.inputContainer}>
          <label id="name">name</label>
          <input
            name="name"
            ref={register({ required: true })}
            className={errors.name && styles.errorInput}
          />
          {errors.name && (
            <span className={styles.errorText}>Name is required</span>
          )}
        </div>

        <div className={styles.inputContainer}>
          <label id="email">email</label>
          <input
            name="email"
            ref={register({ required: true, pattern: regex.email })}
            className={errors.email && styles.errorInput}
          />
          {errors.email && (
            <span className={styles.errorText}>Email is required</span>
          )}
        </div>

        <div className={styles.inputContainer}>
          <label id="message">your message</label>
          <textarea name="message" ref={register} rows={6} />
        </div>

        <button type="submit" className={styles.submit}>
          send
        </button>
      </form>
    </Layout>
  )
}

export default ContactPage
