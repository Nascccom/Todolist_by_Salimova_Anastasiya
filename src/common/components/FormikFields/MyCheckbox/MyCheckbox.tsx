import React from "react"
import { useField } from "formik"
import s from "./../FormikFields.module.css"
import Checkbox from "@mui/material/Checkbox"
import { FormControlLabel } from "@mui/material"

type Props = {
    name: string
}

export const MyCheckbox = ({ name, ...props }: Props) => {
    const [field, meta] = useField({ name, type: "checkbox" })
    return (
        <>
            <FormControlLabel label={name} {...field} {...props} control={<Checkbox checked={field.checked} />} />
            {meta.touched && meta.error ? <div className={s.errorField}>{meta.error}</div> : null}
        </>
    )
}
