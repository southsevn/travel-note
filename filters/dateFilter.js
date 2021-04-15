import moment from 'moment';

export const dateFilter = (value) => {
  return value ? moment(value).format('DD MMMM YYYY') : 'No data.';
};

