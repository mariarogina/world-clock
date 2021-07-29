import React, { useState } from "react";
import shortid from "shortid";
import ClockTemplate from "./ClockTemplate";
import PropTypes from "prop-types";

export default function Form({ handleAdd }) {
  const [form, setForm] = useState({ nameCity: "", timeZone: "" });
  

  const handleChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const clock = new ClockTemplate(
      form.nameCity,
      form.timeZone,
      shortid.generate()
    );
    handleAdd(clock);
    setForm({ nameCity: "", timeZone: "" });
  };

  return (
    <div className="container">
      <form
        className="row"
        onSubmit={handleSubmit}
        style={{ margin: "50px 0px" }}
        
      >
        <div className="col">
          <label
            htmlFor="name-city"
            style={{
              height: "50px",
              marginRight: "0",
              fontWeight: "700",
              color: "blue",
            }}
          >
            Название
          </label>
          <br />
          <input
            type="text"
            id="name-city"
            name="nameCity"
            value={form.nameCity}
            onChange={handleChange}
            required
            onfocus="this.value=''"
            autocomplete="off"
          />
        </div>
        <div className="col">
          <label
            htmlFor="time-zone"
            style={{ height: "50px", fontWeight: "700", color: "blue" }}
          >
            Временная зона
          </label>
          <br />
          <input
            type="text"
            id="time-zone"
            name="timeZone"
            value={form.timeZone}
            onChange={handleChange}
            required
            onfocus="this.value=''"
            autocomplete="off"
          />
        </div>
        <div className="col" style={{ marginTop: "40px", textAlign: "left" }}>
          <button type="submit" className="btn btn-primary">
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
}
Form.propTypes = {
  handleAdd: PropTypes.func,
};

Form.defaultPropTypes = {
  handleAdd: () => {},
};
