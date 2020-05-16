import React, { useCallback } from "react";
import "./styles.css";
import { useFormik } from "formik";
import * as yup from "yup";
import metodos from '../../methods';

export default function Uniforme() {
  const formik = useFormik({
    initialValues: {
      f: "",
      a: 0,
      b: 0,
      d: 0,
    },
    validationSchema: yup.object({
      f: yup.string().required("Obrigatório").label("Função"),
      a: yup.number().required("Obrigatório").label("a"),
      b: yup.number().required("Obrigatório").label("b"),
      d: yup.number().required("Obrigatório").moreThan(0).label("Δ"),
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

            <label htmlFor="a">a</label>
            <input
              id="a"
              name="a"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.a}

            />
            {formik.touched.a && formik.errors.a ? (
              <div className="error">{formik.errors.a}</div>
            ) : null}

            <label htmlFor="b">b</label>
            <input
              id="b"
              name="b"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.b}
            />
            {formik.touched.b && formik.errors.b ? (
              <div className="error">{formik.errors.b}</div>
            ) : null}

            <label htmlFor="d">Δ</label>
            <input
              id="d"
              name="d"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.d}
            />
            {formik.touched.d && formik.errors.d ? (
              <div className="error">{formik.errors.d}</div>
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
