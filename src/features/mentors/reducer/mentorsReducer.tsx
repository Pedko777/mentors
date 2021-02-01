import { Reducer } from 'redux';
import { IMentors } from '../../../interfaces/Mentors.interface';
import MentorsActions from '../actions/mentorsActions.type';
import MentorsActionsTypes from '../actions/mentorsActionsTypes.enum';

const initialState: IMentors[] = [];

const mentorsReducer: Reducer<IMentors[], MentorsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case MentorsActionsTypes.GET_MENTORS_REQUEST: {
      return [...state];
    }
    case MentorsActionsTypes.GET_MENTORS_SUCCESS: {
      return action.mentors;
    }
    case MentorsActionsTypes.GET_MENTORS_ERROR: {
      return [...state];
    }
    default:
      return state;
  }
};

export default mentorsReducer;
