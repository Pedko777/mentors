import { Reducer } from 'redux';
import MentorsActions from '../actions/mentorActions.type';
import MentorsActionsTypes from '../actions/mentorActionsTypes.enum';
import { IMentor } from '../../../interfaces/Mentors.interface';

const initialState: IMentor | null = null;

const mentorsReducer: Reducer<IMentor | null, MentorsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case MentorsActionsTypes.GET_MENTOR_BY_ID_REQUEST: {
      return state;
    }
    case MentorsActionsTypes.GET_MENTOR_BY_ID_SUCCESS: {
      return action.mentor;
    }
    case MentorsActionsTypes.GET_MENTOR_BY_ID_ERROR: {
      return state;
    }
    default:
      return state;
  }
};

export default mentorsReducer;
