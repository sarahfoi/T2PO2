import React, { useCallback, useState } from "react";
//import "./styles.css";
import { useFormik } from "formik";
import * as yup from "yup";
import metodos from "../../methods";
import "materialize-css";
import { Row, Col, CardPanel, TextInput } from "react-materialize";
import { VictoryChart, VictoryLine } from "victory";

export default function Gradiente() {
  const [min, setMin] = useState(0);
  const [resp, setResp] = useState(false);
  const [err, setErr] = useState(false);

  const formik = useFormik({
    initialValues: {
      f: "",
      xinicial: "(1 0)",
      e: 0,
    },
    validationSchema: yup.object({
      f: yup.string().required("Obrigatório").label("Função"),
      xinicial: yup.string().required("Obrigatório").label("x0"),
      e: yup.number().required("Obrigatório").moreThan(0).label("ε"),
    }),
    onSubmit: (values) => {
      setResp(false);
      setErr("");
      metodos("Gradiente", values)
        .then((value) => {
          console.log("then: " + value);
          setMin(value);
        })
        .catch((reason) => {
          if(reason === '') reason = 'Tempo limite de cálculo excedido';
          console.log(reason);
          setErr(reason);
        })
        .finally(() => {
          console.log("finally");
          setResp(true);
        });
    },
  });

  return (
    <Row style={{ marginLeft: 30, marginRight: 30 }}>
      <Col s={12} m={12} l={12}>
        <h4 style={{ fontWeight: "bold" }}>Gradiente</h4>
      </Col>
      <Col s={4} m={4} l={4}>
        <CardPanel
          name="formulario"
          style={{ minHeight: 486.75, maxHeight: 486.75 }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Row style={{ textAlign: "center" }}>
              <div class="col s12 m12 l12" style={{ marginBottom: 20 }}>
                <TextInput
                  label="Função"
                  s={12}
                  m={12}
                  l={12}
                  id="f"
                  name="f"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.f}
                ></TextInput>
                {formik.touched.f && formik.errors.f ? (
                  <div className="error">{formik.errors.f}</div>
                ) : null}
              </div>
              <div class="col s12 m12 l12" style={{ marginBottom: 20 }}>
                <div class="col s6 m6 l6">
                  <TextInput
                    label="x0"
                    s={12}
                    m={12}
                    l={12}
                    id="xinicial"
                    name="xinicial"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.xinicial}
                  ></TextInput>
                  {formik.touched.xinicial && formik.errors.xinicial ? (
                    <div>{formik.errors.xinicial}</div>
                  ) : null}
                </div>
                <div class="col s6 m6 l6">
                  <TextInput
                    label="ε"
                    s={12}
                    m={12}
                    l={12}
                    id="e"
                    name="e"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.e}
                  ></TextInput>
                  {formik.touched.e && formik.errors.e ? (
                    <div>{formik.errors.e}</div>
                  ) : null}
                </div>
              </div>
              <button
                class="btn btn-large cyan darken-1"
                type="submit"
                name="action"
              >
                Calcular mínimo
                <i class="material-icons right">send</i>
              </button>
            </Row>
          </form>
        </CardPanel>
      </Col>
      <Col s={8} m={8} l={8}>
        <CardPanel
          name="resposta"
          style={{ textAlign: "center", minHeight: 486.75, maxHeight: 486.75 }}
        >
          <Row>
            <div class="col s12 m12 l12">
              <CardPanel className="cyan darken-1">
                <p style={{ fontSize: 24 }}>
                  {resp ? (
                    <span className="white-text" name="resposta-x">
                      {err === "" ? "Mínimo: x* = (" + min.toString().replace(new RegExp(',','gi'),' ') +")" : err}
                    </span>
                  ) : null}
                </p>
              </CardPanel>
            </div>
          </Row>
        </CardPanel>
      </Col>
    </Row>
  );
}
