import React, { useCallback } from "react";
import "./styles.css";
import { useFormik } from "formik";
import * as yup from "yup";
import metodos from '../../methods';

export default function Uniforme() {
  const formik = useFormik({
    initialValues: {
      f: "",
      a: -3,
      b: 6,
      d: 0.5,
    },
    validationSchema: yup.object({
      f: yup.string().required("Obrigatório").label("Função"),
      // a: yup.number().required("Obrigatório").label("a"),
      //b: yup.number().required("Obrigatório").label("b"),
      //d: yup.number().required("Obrigatório").moreThan(0).label("&Delta;"),
    }),
    onSubmit: async (values) => {
        try{
            const ret = await metodos('Uniforme',values);
            console.log(ret);
            alert(ret);
        }catch({ret}){
            console.log(ret);
        }
    },
  });

  return (
    <div className="form-container">
      <section className="form">
        <form onSubmit={formik.handleSubmit}>
          <div className="input-container">
            <label htmlFor="f">Função</label>
            <input
              id="f"
              name="f"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.f}
            />
            {formik.touched.f && formik.errors.f ? (
              <div className="error">{formik.errors.f}</div>
            ) : null}
          </div>
          
          <button type="submit" className="submit">
            Calcular mínimo
          </button>
        </form>
      </section>
    </div>
  );
}
