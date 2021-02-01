import { call, put, takeEvery, all } from 'typed-redux-saga';
import MentorsActionsTypes from '../mentors/actions/mentorsActionsTypes.enum';
import MentorActionsTypes from '../mentor/actions/mentorActionsTypes.enum';
import filteredMentorsActionsTypes from '../filteredMentors/actions/filteredMentorsActionsTypes.enum';
import {
  getMentors,
  getMentorById,
  getMentorsBySearchQuery,
} from '../../api/api';
import {
  getMentorsSuccess,
  getMentorsError,
} from '../mentors/actions/mentorsActionsCreators';
import {
  filteredMentorsError,
  filteredMentorsSuccess,
} from '../filteredMentors/actions/filteredMentorsActionsCreators';
import {
  getMentorsByIdSuccess,
  getMentorsByIdError,
} from '../mentor/actions/mentorActionsCreators';
import { IGetMentorByIdRequest } from '../mentor/actions/mentorActions.interface';
import { IFetchWithQueryRequest } from '../filteredMentors/actions/filteredMentorsActions.interface';

export function* getMentorsSaga(): Generator {
  try {
    const response = yield* call(getMentors);
    const mentors = response.data;
    yield* put(getMentorsSuccess(mentors));
  } catch (e) {
    yield* put(getMentorsError());
  }
}

export function* getMentorByIdSaga(action: IGetMentorByIdRequest): Generator {
  try {
    const response = yield* call(getMentorById, action.mentorId);
    const mentor = response.data;
    yield* put(getMentorsByIdSuccess(mentor));
  } catch (e) {
    yield* put(getMentorsByIdError());
  }
}

export function* filterMentors(action: IFetchWithQueryRequest): Generator {
  try {
    const response = yield* call(getMentorsBySearchQuery, action.query);
    const mentors = response.data;

    yield* put(filteredMentorsSuccess(mentors));
  } catch (e) {
    yield* put(filteredMentorsError());
  }
}

export function* mentorsSaga(): Generator {
  yield* all([
    takeEvery(MentorsActionsTypes.GET_MENTORS_REQUEST, getMentorsSaga),
    takeEvery(MentorActionsTypes.GET_MENTOR_BY_ID_REQUEST, getMentorByIdSaga),
    takeEvery(
      filteredMentorsActionsTypes.FILTERED_MENTORS_WITH_QUERY_REQUEST,
      filterMentors
    ),
  ]);
}
