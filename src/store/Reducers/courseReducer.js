import { courses } from "../../StaticFiles/staticDatas";
import { courseActionNames } from "../Actions/courseActions";

const initialState = {
  courses: courses
};

export function courseReducer(state = initialState, action) {
  switch (action.type) {
    case courseActionNames.SEARCH:
      return filterCourses(action.payload.text);
  }
  return state;
}

function filterCourses(text) {
  if (text === "") {
    return initialState;
  }

  const textLowercase = text.toLowerCase();
  const filteredData = courses.filter(item => {
    const itemNameLowercase = item.name.toLocaleLowerCase();
    return itemNameLowercase.indexOf(textLowercase) > -1;
  });

  return {
    courses: filteredData
  };
}
