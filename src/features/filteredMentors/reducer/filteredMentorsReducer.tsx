import { Reducer } from 'redux';
import { IMentors } from '../../../interfaces/Mentors.interface';
import MentorsActions from '../actions/filteredMentorsActions.type';
import filteredMentorsActionTypes from '../actions/filteredMentorsActionsTypes.enum';

const initialState: IMentors[] = [];

const filteredMentorsReducer: Reducer<IMentors[], MentorsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case filteredMentorsActionTypes.FILTERED_MENTORS_WITH_QUERY_REQUEST: {
      return [...state];
    }
    case filteredMentorsActionTypes.FILTERED_MENTORS_WITH_QUERY_SUCCESS: {
      return action.filteredMentors;
    }
    case filteredMentorsActionTypes.FILTERED_MENTORS_WITH_QUERY_ERROR: {
      return [...state];
    }
    default:
      return state;
  }
};

export default filteredMentorsReducer;
