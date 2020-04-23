import React from "react"
import { Layout } from "../components/Layout"
import SEO from "../components/seo"
import { encode } from "../lib"
import styles from "./contact.module.css"
import useForm from "react-hook-form"
import { regex } from "../lib/regex"
import { Link } from "gatsby"
import ArrowHorizontal from "../assets/svg/arrow_horizontal"

const FORM_NAME = "contact"

const ContactPage = () => {
  const { register, handleSubmit, errors, reset } = useForm()
  const [submitted, setSubmitted] = React.useState()

  const onSubmit = data => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": FORM_NAME,
        ...data,
      }),
    })
      .then(() => {
        setSubmitted(true)
        reset()
      })
      .catch(error => console.error(error))
  }

  return (
    <Layout>
      <SEO title="Contact" />
      {/* <h2>Hello from the other side</h2> */}
      <Link to="/" className={styles.backLink}>
        <ArrowHorizontal />
      </Link>
      <h2>Say hi 👋🏻</h2>

      {submitted && (
        <div>
          <span>Thank you, we'll be in touch soon!</span>
          <br />
          <Link className="default-link" to="/">
            Return to homepage
          </Link>
        </div>
      )}

      {!submitted && (
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
            <label id="email">e-mail</label>
            <input
              name="email"
              ref={register({ required: true, pattern: regex.email })}
              className={errors.email && styles.errorInput}
            />
            {errors.email && (
              <span className={styles.errorText}>
                Please provide a valid email
              </span>
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
      )}
    </Layout>
  )
}

export default ContactPage
