import { COURSE } from "../../Data/Dummy";
import { SET_FILTERS, TOGGLE_FAVOURITE } from "../actions/course.js";
import CourseOverview from "../../Screens/CourseOverview";

const intialState = {
  course: COURSE,
  filteredCourse: COURSE,
  FavouriteCourse: [],
};

const courseReducer = (state = intialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.FavouriteCourse.findIndex(
        (course) => course.id === action.CourseId
      );
      if (existingIndex >= 0) {
        const updatedFavCourse = [...state.FavouriteCourse];
        updatedFavCourse.splice(existingIndex, 1);
        return { ...state, FavouriteCourse: updatedFavCourse };
      } else {
        const course = state.course.find(
          (course) => course.id === action.CourseId
        );
        return {
          ...state,
          FavouriteCourse: state.FavouriteCourse.concat(course),
        };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredCourse = state.course.filter((course) => {
        if (appliedFilters.Coursera && !course.Coursera) {
          return false;
        }
        if (appliedFilters.Udemy && !course.Udemy) {
          return false;
        }
        if (appliedFilters.Edx && !course.Edx) {
          return false;
        }
        if (appliedFilters.Udacity && !course.Udacity) {
          return false;
        }
        if (appliedFilters.Edureka && !course.Edureka) {
          return false;
        }
        if (appliedFilters.FutureLearn && !course.FutureLearn) {
          return false;
        }
        if (appliedFilters.Business && !course.Business) {
          return false;
        }
        if (appliedFilters.DataScience && !course.DataScience) {
          return false;
        }
        if (appliedFilters.Design && !course.Design) {
          return false;
        }
        if (appliedFilters.Finance && !course.Finance) {
          return false;
        }
        return true;
      });
      return { ...state, filteredCourse: updatedFilteredCourse };

    default:
      return state;
  }
};

export default courseReducer;
