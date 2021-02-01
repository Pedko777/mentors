import axios, { AxiosPromise } from 'axios';
import { IMentor, IMentors } from '../interfaces/Mentors.interface';

const instance = axios.create({
  baseURL: 'http://151.115.58.69:8080/internship-be4/api/v1',
});

export const getMentors = (): AxiosPromise<IMentors[]> =>
  instance({
    method: 'GET',
    url: '/mentors/',
  });

export const getMentorById = (id: string): AxiosPromise<IMentor> =>
  instance({
    method: 'GET',
    url: `/mentors/${id}/profile`,
  });

export const getMentorsBySearchQuery = (
  query: string
): AxiosPromise<IMentors[]> =>
  instance({
    method: 'GET',
    url: `/mentors?${query}`,
  });

export const getPhotoById = (id: string): AxiosPromise<string> =>
  instance({
    method: 'GET',
    url: `/images/${id}`,
  });
