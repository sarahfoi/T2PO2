import React, { useCallback } from "react";
import "./styles.css";
import { useFormik } from "formik";
import * as yup from "yup";
import metodos from '../../methods';
import 'materialize-css';
import {Row,Col,CardPanel,TextInput} from 'react-materialize';

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
  //  <div class="container">
      <Row style={{marginTop: 30, marginLeft: 30, marginRight:30}}>
        <Col s={4} m={4} l={4}>
          <CardPanel name="formulario" style={{minHeight: 486.75, maxHeight:486.75}}> 
            <form onSubmit={formik.handleSubmit}>
              <Row  style={{textAlign: "center"}}>
                <div class="col s12 m12 l12" style={{marginBottom: 20}}>
                  <TextInput
                    label="Função"
                    s={12} m={12} l={12}
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
                <div class="col s12 m12 l12"  style={{marginBottom: 20}}>
                  <div class="col s6 m6 l6">
                    <TextInput
                      label="a"
                      s={12} m={12} l={12}
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
                      s={12} m={12} l={12}
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
                <div class="col s12 m12 l12"  style={{marginBottom: 20}}>
                  <div class="col s6 m6 l6">
                    <TextInput
                      label="Δ"
                      s={12} m={12} l={12}
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
                <button class="btn waves-effect waves-light btn-large cyan darken-1" type="submit" name="action">Calcular mínimo
                  <i class="material-icons right">send</i>
                </button>
              </Row>
            </form>
          </CardPanel>
        </Col>
        <Col s={8} m={8} l={8}>
          <CardPanel name="resposta" style={{textAlign: "center",minHeight: 486.75, maxHeight:486.75}}>
            <Row>
              <div class="col s12 m12 l12">
                <CardPanel className="cyan darken-1">
                  <p style={{fontSize: 24}}>
                    <span className="white-text" name="resposta-x">Mínimo: x* = 0</span>
                  </p>
                </CardPanel> 
              </div> 
              <div name="grafico" class="col s12 l12 m12">
                <img src="https://lh3.googleusercontent.com/proxy/Ng-bcN4-5RUd0tfvRZVatagESCIzpMVtFLeqCoF0JckSjLLO64jei4uQEqsIPux285_gDkTMoO8zusss0fqgv3vyLg4jMHwoZjGyfgvTjPKnUPXlneOuh1YELvBCzbh5J14ahMEakfDw6gw0bO-PvqpOGD24Cg"></img>
              </div>          
            </Row>
          </CardPanel>
        </Col>
      </Row>
 //   </div>
  );
}
