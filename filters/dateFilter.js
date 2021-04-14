import moment from 'moment';

export const dateFilter = (value) => {
  return value ? moment(new Date(value), 'Do MMMM YYYY') : 'No data.';
};

