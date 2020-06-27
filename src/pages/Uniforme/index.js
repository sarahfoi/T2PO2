import React, { useCallback, useState } from "react";
import "./styles.css";
import { useFormik } from "formik";
import * as yup from "yup";
import metodos from "../../methods";
import "materialize-css";
import { Row, Col, CardPanel, TextInput } from "react-materialize";
import { VictoryChart, VictoryLine } from "victory";

export default function Uniforme() {
  const [min, setMin] = useState(0);
  const [resp, setResp] = useState(false);
  const [dots, setDots] = useState([
    { x: 0, y: 0 },
    { x: 1, y: 1 },
  ]);
  const [err, setErr] = useState(false);

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
    onSubmit: (values) => {
      setResp(false);
      setErr("");
      metodos("Uniforme", values,3000)
        .then((value) => {
          console.log("then: " + value);
          setMin(value);
        })
        .catch((reason) => {
          console.log(reason);
          setErr(reason);
        })
        .finally(() => {
          console.log("finally");
          setResp(true);
        });
      metodos("Pontos", values,10000).then((val) => {
        setDots(val);
      });
    },
  });
  return (
    <Row style={{ marginLeft: 30, marginRight: 30 }}>
      <Col s={12} m={12} l={12}> 
        <h4 style={{fontWeight:"bold"}}>Busca Uniforme</h4>
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
                    label="a"
                    s={12}
                    m={12}
                    l={12}
                    id="a"
                    name="a"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.a}
                  ></TextInput>
                  {formik.touched.a && formik.errors.a ? (
                    <div>{formik.errors.a}</div>
                  ) : null}
                </div>
                <div class="col s6 m6 l6">
                  <TextInput
                    label="b"
                    s={12}
                    m={12}
                    l={12}
                    id="b"
                    name="b"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.b}
                  ></TextInput>
                  {formik.touched.b && formik.errors.b ? (
                    <div>{formik.errors.b}</div>
                  ) : null}
                </div>
              </div>
              <div class="col s12 m12 l12" style={{ marginBottom: 20 }}>
                <div class="col s6 m6 l6">
                  <TextInput
                    label="Δ"
                    s={12}
                    m={12}
                    l={12}
                    id="d"
                    name="d"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.d}
                  ></TextInput>
                  {formik.touched.d && formik.errors.d ? (
                    <div className="error">{formik.errors.d}</div>
                  ) : null}
                </div>
              </div>
              <button
                class="btn waves-effect waves-light btn-large cyan darken-1"
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
                      {err === "" ? "Mínimo: x* = " + min : err}
                    </span>
                  ) : null}
                </p>
              </CardPanel>
            </div>
          </Row>
          <div name="grafico" style={{ width: "100%", height: 300 }}>
            <VictoryChart width={1000}>
              <VictoryLine data={dots} />
            </VictoryChart>
          </div>
        </CardPanel>
      </Col>
    </Row>
  );
}
