import React from "react"
import { Field } from "formik"

const FirstForm = ({ errors }) => {
  return (
    <div className="input-page">
      <div className="input-group">
        <div className="field-group">
          <Field
            name="imePrezime"
            className={errors.imePrezime ? "field error" : "field"}
            placeholder="Ime i prezime plesača"
          />
        </div>
      </div>
      <div className="input-group">
        <div className="field-group">
          <Field
            name="imePrezimeSkrbnika"
            className="field"
            placeholder=" Ime i prezime skrbnika (za maloljetnike)"
          />
        </div>
      </div>

      <div className="input-group">
        <div className="field-group">
          <Field
            name="dobPlesaca"
            className={errors.dobPlesaca ? "field error" : "field"}
            placeholder="Dob plesača"
          />
        </div>
      </div>

      <div className="input-group">
        <div className="field-group">
          <Field
            name="mobitel"
            placeholder="Broj mobitela plesača"
            className={errors.mobitel ? "field error" : "field"}
          />
        </div>
      </div>
      <div className="input-group" style={{ marginBottom: "1.5rem" }}>
        <div className="field-group">
          <Field
            name="mobitelSkrbnika"
            className="field"
            placeholder="Broj mobitela skrbnika (za maljoljetnike)"
          />
        </div>
      </div>
      <div className="input-group">
        <div className="field-group">
          <Field
            type="email"
            name="email"
            className={errors.email ? "field error" : "field"}
            placeholder="E-mail adresa plesača"
          />
        </div>
      </div>
      <div className="input-group">
        <div className="field-group">
          <Field
            autoComplete="nofill"
            type="email"
            name="emailSkrbnika"
            className={errors.emailSkrbnika ? "field error" : "field"}
            placeholder="E-mail adresa skrbnika (za maloljetnike)"
          />
        </div>
      </div>
    </div>
  )
}

export default FirstForm
