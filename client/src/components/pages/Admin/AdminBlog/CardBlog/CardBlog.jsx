import styles from "./CardBlog.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  updatePost,
  clnUpPost,
  deletePost,
  clnDel,
} from "../../../../../redux/postActions";

const CardBlog = (props) => {

  const dispatch = useDispatch();
  const {resUpPost} = useSelector(state => state.post);
  const {resDel} = useSelector(state => state.post);

  const [inputsM, setInputsM] = useState({
    id_post: null,
    title: "",
    summary: "",
    content: "",
    active: null,
  });

  console.log(inputsM);
  console.log(resDel);

  useEffect(() => {

    if (Object.keys(resUpPost).length){
      dispatch(clnUpPost());
    }

    if (Object.keys(resDel).length){
      dispatch(clnDel());
    }

  },[ resUpPost, resDel ])

  const handlerInputsM = (event) => {
    setInputsM({
      ...inputsM,
      [event.target.name]: event.target.value,
    });
  };


  const handlerSubmitModify = (event) => {
    event.preventDefault();

    dispatch(updatePost(inputsM));

    setInputsM({
      id_post: "",
      title: "",
      summary: "",
      content: "",
      active: "",
    });
    
  };

  const handlerButtonMod = (event) => {
    setInputsM({
      ...inputsM,
        id_post: event.target.value,
        title: props.title,
        summary: props.summary,
        content: props.content,
        active: props.active,
    });
  };

  const handlerDelete = (event) => {
    dispatch(deletePost(event.target.value));
  }

  return (
    <section>
    <div className={`card mb-3`} style={{ width: "540px" }}>
      <div className={`row g-0`}>
        <div className={`col-md-4`}>
          <img src={props.image} className={`${styles.image} img-fluid rounded-start`} alt="..." />
        </div>
        <div className={`col-md-8`}>
          <div className={`card-body`}>
            <h5 className={`card-title`}>{props.title}</h5>
            <p className={`card-text`}>{props.summary}</p>
            <div className={styles.divButtons}>
            <button className={`btn btn-primary`} name="id_post" value={props.id_post} onClick={handlerButtonMod}>
              Cargar Datos
            </button>
            <button className={`btn btn-primary`} value={props.id_post} onClick={handlerDelete}>
              Eliminar
            </button>
            {props.active === true ? <p className={`${styles.txtButtonG} `}>Active</p> : <p className={`${styles.txtButtonR} `}>Inactive</p>}
            </div>
          </div>
        </div>
      </div>
    </div>





    <div className="card card-body">
            <form onSubmit={handlerSubmitModify}>
              <div>
                
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Id Post
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="id_post"
                    value={inputsM.id_post}
                    onChange={handlerInputsM}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Titulo
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="title"
                    value={inputsM.title}
                    onChange={handlerInputsM}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">
                  Resumen
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword3"
                    name="summary"
                    value={inputsM.summary}
                    onChange={handlerInputsM}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">
                  Texto
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="content"
                    value={inputsM.content}
                    onChange={handlerInputsM}
                  ></textarea>
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">
                  Active
                </label>
                <div className="col-sm-10">

                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="active"
                    value={inputsM.active}
                    onChange={handlerInputsM}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Modificar
              </button>
            </form>
          </div>
    </section>
  );
};

export default CardBlog;