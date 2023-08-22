import React from "react"
import { Field } from "formik"

const SecondForm = ({ errors }) => {
  return (
    <div className="input-page">
      <div className="input-group">
        <div className="field-group">
          <Field
            component="select"
            name="levelSelect"
            className={errors.levelSelect ? "field error" : "field"}
          >
            <option value="" defaultValue disabled>
              Level
            </option>
            <option value="">
              Ostavi prazno 
            </option>
            <option value="Početni">
              Početni
            </option>
            <option value="Srednji">
              Srednji
            </option>
            <option value="Napredni">
              Napredni
            </option>
          </Field>
        </div>
        <div className="field-group">
          <Field
            component="select"
            name="stilSelect"
            className={errors.stilSelect ? "field error" : "field"}
          >
            <option value="" defaultValue disabled>
              Plesni stil
            </option>
            <option value="">
              Ostavi prazno 
            </option>
            <option value="HipHop">
              HipHop 
            </option>
            <option value="Urban">
              Urban
            </option>
            <option value="Jazz">
              Jazz
            </option>
            <option value="Balet">
              Balet
            </option>
          </Field>
        </div>
        <div className="field-group">
          <Field
            component="select"
            name="lokacijaSelect"
            className={errors.lokacijaSelect ? "field error" : "field"}
          >
            <option value="" defaultValue disabled>
              Lokacija
            </option>
            <option value="Studio 1 - CENTAR">
              Studio 1 - CENTAR
            </option>
            <option value="Studio 2 - ZAVRTNICA">
            Studio 2 - ZAVRTNICA
            </option>
            <option value="Studio 3 - TREŠNJEVKA">
            Studio 3 - TREŠNJEVKA
            </option>
            <option value="STUDIO 4 - DUBRAVA">
            STUDIO 4 - DUBRAVA
            </option>
          </Field>
        </div>
      </div>
    </div>
  )
}

export default SecondForm
