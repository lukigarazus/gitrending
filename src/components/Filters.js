import React from "react";
import { connect } from "react-redux";
import LANGUAGES from "../constants/languages";
import {
  changeSinceParam,
  changeLanguageParam,
  changeStarSort
} from "../actions";

const radioInputs = ["daily", "weekly", "monthly"];
const sortTypes = ["ascending", "descending"];

const Filters = ({ language, since, starSort, dispatch }) => {
  return (
    <div className="filters">
      <div className="filter">
        <h5>SELECT INTERVAL:</h5>
        {radioInputs.map(val => (
          <>
            <input
              onChange={ev => dispatch(changeSinceParam(ev.target.value))}
              type="radio"
              id={val}
              name="since"
              value={val}
              checked={val === since}
            />
            <label for={val}>{val}</label>
          </>
        ))}
      </div>
      <div className="filter">
        <h5>SELECT A LANGUAGE</h5>
        <select onChange={ev => dispatch(changeLanguageParam(ev.target.value))}>
          <option disabled selected={!language} value>
            {" "}
            -- select a language --{" "}
          </option>
          {LANGUAGES.map(({ urlParam, name }) => (
            <option selected={language === urlParam} value={urlParam}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="filter">
        <h5>SORT BY STAR COUNT:</h5>
        <select onChange={ev => dispatch(changeStarSort(ev.target.value))}>
          <option disabled selected={!language} value>
            {" "}
            -- sort by stars --{" "}
          </option>
          {sortTypes.map(type => (
            <option selected={type === starSort} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <style>{`.filters { display: flex;justify-content: space-around;height: 150px; border-bottom: 2px solid black; } .filter { padding: 5px; }`}</style>
    </div>
  );
};

const mapStateToProps = ({ language, since, starSort }) => ({
  language,
  since,
  starSort
});

export default connect(mapStateToProps)(Filters);
