import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import Button from './../../../components/Buttons/Button';
import { Arrow, Loupe } from '../../../components/SVG';
import SvgRating from './../../../components/SVG/Rating';
import SvgRate from './../../../components/SVG/Rate';
import { optionProfession } from './Options';
import { useState } from 'react';
import CustomSelect from './CustomSelect';
import { filteredMentorsRequest } from './../../../features/filteredMentors/actions/filteredMentorsActionsCreators';
import Select from 'react-select';
import { ValueType } from 'react-select';
import { aspectsNamesOptions } from './Options';

interface OptionType {
  label: string;
  value: string;
}

const SearchForm = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const [aspects, setAspects] = useState<ValueType<OptionType, true> | null>();

  const handleChangeAspects = (selected: ValueType<OptionType, true>) => {
    setAspects(selected);
  };
  const handleDeleteAspects = (label: string) => {
    setAspects((aspects) =>
      aspects?.filter((aspect) => aspect.label !== label)
    );
  };
  const handleDeleteAllAspects = () => {
    setAspects(null);
  };

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      search: '',
      profession: '',
      maxRate: 200,
      minRating: 1,
      aspectsNames: [],
    },
    validationSchema: Yup.object({
      search: Yup.string()
        .matches(/[A-Za-z]/g, 'Only charts')
        .max(20, 'Search value must be shorter than 20 characters!'),
      profession: Yup.string()
        .max(20, 'Search profession must be shorter than 20 characters')
        .oneOf(
          ['Psychologist', 'Photograph', 'Designer'],
          'Invalid profession type'
        ),
      maxRate: Yup.number()
        .typeError('Must be a number')
        .max(200, 'Max hourly rate 200')
        .min(1, 'Min hourly rate 1'),
      minRating: Yup.number()
        .typeError('Must be a number')
        .max(5, 'Max rating 5 stars')
        .min(1, 'Min rating 1 star'),

      aspectsNames: Yup.array().max(
        20,
        'Search aspect must be shorter than 20 characters'
      ),
    }),

    onSubmit: (values) => {
      if (values !== formik.initialValues) {
        dispatch(filteredMentorsRequest(query));
        handleDeleteAllAspects();
      }
      if (aspects) {
        dispatch(filteredMentorsRequest(query));
      }
    },
  });
  const searchQuery = formik.values.search && `&search=${formik.values.search}`;
  const professionQuery =
    formik.values.profession && `&profession=${formik.values.profession}`;
  const maxRateQuery =
    formik.values.maxRate && `&maxRate=${formik.values.maxRate}`;
  const minRatingQuery =
    formik.values.minRating && `&minRating=${formik.values.minRating}`;
  const aspectsNamesQuery = aspects
    ? `&aspectsNames=${aspects.map((aspect) => aspect.label)}`
    : '';

  const query = `${searchQuery}${professionQuery}${maxRateQuery}${minRatingQuery}${aspectsNamesQuery}`;
  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <section className="form__input-search">
        <input
          id="search"
          type="search"
          className="form__input form__input--search"
          placeholder="Search..."
          {...formik.getFieldProps('search')}
        />
        {formik.touched.search && formik.errors.search ? (
          <div className="form__input-search-error">
            <p className="form__input-error-message">{formik.errors.search}</p>
          </div>
        ) : null}
      </section>
      <section
        className="form__input-profession"
        onClick={() => setIsActive(!isActive)}
      >
        <label htmlFor="profession">Profession</label>
        {!isActive && <Arrow className="form__arrow" />}
        {optionProfession && (
          <CustomSelect
            options={optionProfession}
            onChange={formik.handleChange}
            name={'profession'}
            id={'profession'}
            value={formik.values.profession}
          />
        )}

        {formik.touched.profession && formik.errors.profession ? (
          <div className="form__input-error">
            <p className="form__input-error-message">
              {formik.errors.profession}
            </p>
          </div>
        ) : null}
      </section>
      <section className="form__input-max-rate">
        <label htmlFor="maxRate">Max hourly rate</label>
        <div className="form__input-max-rate-flex">
          <div className="form__input-max-rate-svg">
            <SvgRate />
          </div>
          <input
            className="form__input form__input--max-rate"
            id="maxRate"
            type="text"
            {...formik.getFieldProps('maxRate')}
          />
        </div>
        {formik.touched.maxRate && formik.errors.maxRate ? (
          <div className="form__input-error">
            <p className="form__input-error-message">{formik.errors.maxRate}</p>
          </div>
        ) : null}
      </section>
      <section className="form__input-min-rating ">
        <label htmlFor="minRating">Min rating</label>
        <div className="form__input-min-rating-flex">
          <div className="form__input-min-rating-svg">
            <SvgRating />
          </div>

          <input
            className="form__input form__input--min-rating"
            id="minRating"
            type="text"
            min={1}
            max={5}
            {...formik.getFieldProps('minRating')}
          />
        </div>
        {formik.touched.minRating && formik.errors.minRating ? (
          <div className="form__input-error">
            <p className="form__input-error-message">
              {formik.errors.minRating}
            </p>
          </div>
        ) : null}
      </section>

      <section className="form__input-aspects">
        <label htmlFor="aspects" className="input-group__label">
          Life aspects
        </label>

        <Select
          closeMenuOnSelect={false}
          value={aspects}
          isMulti
          options={aspectsNamesOptions}
          name="aspects"
          placeholder={'Search...'}
          id="aspects"
          components={{
            IndicatorSeparator: () => null,
          }}
          defaultValue={formik.initialValues.aspectsNames}
          onChange={handleChangeAspects}
        />
      </section>
      <div className="aspects">
        <ul className="aspects-list">
          {aspects &&
            aspects.map((aspect) => (
              <li
                className="aspects-list-item"
                key={aspect.label}
                onClick={(
                  event: React.MouseEvent<HTMLLIElement, MouseEvent>
                ): void => {
                  event.preventDefault();
                  handleDeleteAspects(aspect.label);
                }}
              >
                <p className="aspects-list-item-text">{aspect.label}</p>
              </li>
            ))}
        </ul>
      </div>

      <div className="form__btn">
        <Button
          type="submit"
          text="Search"
          btnStyle="button button--with-flex"
          svg={<Loupe className="button__svg-blue " />}
        />
      </div>
    </form>
  );
};

export default SearchForm;
