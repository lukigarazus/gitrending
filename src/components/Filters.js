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

class Filters extends React.Component<FiltersProps, void> {
  constructor(props) {
    super(props);
    this.onSinceChange = ev => {
      this.props.dispatch(changeSinceParam(ev.target.value));
    };
    this.onLanguageChange = ev => {
      this.props.dispatch(changeLanguageParam(ev.target.value));
    };
    this.onStarCountChange = ev => {
      this.props.dispatch(changeStarSort(ev.target.value));
    };
  }
  onSinceChange: Function;
  onLanguageChange: Function;
  onStarCountChange: Function;
  render() {
    const { language, since, starSort } = this.props;
    return (
      <div className="filters">
        <div className="filter">
          <h5>SELECT INTERVAL:</h5>
          {radioInputs.map((val: string) => (
            <>
              <input
                onChange={this.onSinceChange}
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
          <select onChange={this.onLanguageChange}>
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
          <select onChange={this.onStarCountChange}>
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
      </div>
    );
  }
}

const mapStateToProps = ({ language, since, starSort }) => ({
  language,
  since,
  starSort
});

export default connect(mapStateToProps)(Filters);
