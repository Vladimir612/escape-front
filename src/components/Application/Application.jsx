import React, { useState } from "react"
import "./Application.scss"
import { Formik, Form } from "formik"

import axios from "axios"

import FirstForm from "./FirstForm"
import SecondForm from "./SecondForm"

import { graphql, Link, useStaticQuery } from "gatsby"

import Img from "gatsby-image"

const Application = () => {
  let [currentStep, setCurrentStep] = useState(0)
  let [next, setNext] = useState(false)
  let [submit, setSubmit] = useState(false)
  let [success, setSuccess] = useState(false)

  const data = useStaticQuery(graphql`
    query getCheckImage {
      file(relativePath: { eq: "check.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="application-wrapper">
      {!success ? (
        <>
          <div className="top-content">
            <h2>INFORMATIVNI UPITNIK</h2>
            {currentStep === 0 ? (
              <p>Dio 1. Osobni podaci</p>
            ) : (
              <p>Dio 2. Interesi</p>
            )}
            <div className="illustration-steps">
              <div className="line"></div>
              <div
                className={
                  currentStep === 0 ? "circle-step active" : "circle-step"
                }
              ></div>
              <div
                className={
                  currentStep === 1 ? "circle-step active" : "circle-step"
                }
              ></div>
            </div>
          </div>
          <div className={!success ? "application-flex" : "none"}>
            <div className="application-container">
              <Formik
                initialValues={{
                  imePrezime: "",
                  imePrezimeSkrbnika: "",
                  mobitel: "",
                  mobitelSkrbnika: "",
                  email: "",
                  emailSkrbnika: "",
                  dobPlesaca: "",
                  levelSelect: "",
                  stilSelect: "",
                  lokacijaSelect: "",
                  dani: [],
                }}
                validate={values => {
                  const errors = {}
                  if (currentStep === 0) {
                    if (!values.email) {
                      errors.email = "Polje je obavezno"
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Email nije validan"
                    }
                    if (values.emailSkrbnika) {
                      if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.emailSkrbnika
                        )
                      ) {
                        errors.emailSkrbnika = "Email nije validan"
                      }
                    }

                    if (!values.imePrezime) {
                      errors.imePrezime = "Polje je obavezno"
                    }

                    if (!values.dobPlesaca) {
                      errors.dobPlesaca = "Polje je obavezno"
                    }

                    if (!values.mobitel) {
                      errors.mobitel = "Polje je obavezno"
                    }
                  } else if (currentStep === 1) {
                    // if (!values.levelSelect) {
                    //   errors.levelSelect = "Polje je obavezno"
                    // }
                    // if (!values.stilSelect) {
                    //   errors.grupaSelect = "Polje je obavezno"
                    // }
                    // if (!values.lokacijaSelect) {
                    //   errors.lokacijaSelect = "Polje je obavezno"
                    // }
                  }

                  return errors
                }}
                onSubmit={async values => {
                  if (submit) {
                    let postBody = {
                      application: {
                        imePrezime: values.imePrezime,
                        imePrezimeSkrbnika: values.imePrezimeSkrbnika,
                        dobPlesaca: values.dobPlesaca,
                        mobitel: values.mobitel,
                        mobitelSkrbnika: values.mobitelSkrbnika,
                        email: values.email,
                        emailSkrbnika: values.emailSkrbnika,
                        level: values.levelSelect,
                        plesniStil: values.stilSelect,
                        lokacija: values.lokacijaSelect,
                      },
                    }

                    setSuccess(true)

                    axios
                      .post(
                        "https://escape-mail-sender.vercel.app/api/application",
                        postBody
                      )
                      .catch(e => {
                        console.log(e)
                      })
                  } else {
                    if (next) {
                      setCurrentStep(currentStep => currentStep + 1)
                    }
                  }
                }}
              >
                {({ errors }) => (
                  <Form>
                    {currentStep === 0 ? (
                      <FirstForm errors={errors} />
                    ) : (
                      <SecondForm errors={errors} />
                    )}

                    {currentStep === 0 ? (
                      <button
                        onClick={() => {
                          setNext(true)
                          setSubmit(false)
                        }}
                        className="green-btn next"
                      >
                        SLEDEĆE
                      </button>
                    ) :  (
                      <div className="button-group">
                        <button
                          onClick={() => {
                            setNext(false)
                            setCurrentStep(0)
                          }}
                          type="button"
                          className="green-btn next"
                        >
                          NATRAG
                        </button>

                        <button
                          onClick={() => {
                            setNext(false)
                            setSubmit(true)
                          }}
                          className="green-btn next"
                        >
                          POŠALJI
                        </button>
                      </div>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </>
      ) : (
        <div className="poruka-uspeh">
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{ width: "6rem" }}
          />
          <h1>Upitnik uspješno poslat</h1>
          <h2>Hvala Vam!</h2>
          <button className="dugme-uspeh">
            <Link to="/">POČETNA</Link>
          </button>
        </div>
      )}
    </div>
  )
}

export default Application
