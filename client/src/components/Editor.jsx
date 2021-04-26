import React from "react";
import styles from "../css/Editor.module.css";

const Editor = e => {
  function onSave() {
    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.info}>
          <label>
            Nombre:
            <input type="text" name="name" />
          </label>
          <label>
            Autor:
            <input type="text" name="author" />
          </label>
          <label>
            Libro:
            <input type="text" name="book" />
          </label>
          <label>
            Idioma:
            <select name="language" id="">
              <option value="Sanskrit">Sánscrito</option>
              <option value="Bengal">Bengalí</option>
              <option value="Spanish">Español</option>
            </select>
          </label>
          <label>
            Imagen:
            <input type="text" name="image" />
            <div className={styles.image_preview}>
              <img src="" alt="" />
            </div>
          </label>
        </div>

        <div className={styles.stanzas_container}>
          <label>
            Versos:
            <textarea name="stanzas" id="" cols="30" rows="10" />
          </label>
        </div>
        <button onClick={onSave}>Guardar</button>
      </form>
    </div>
  );
};

export default Editor;
