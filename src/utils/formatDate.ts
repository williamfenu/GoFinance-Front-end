const formatDate = (d: Date): string => {
  return Intl.DateTimeFormat('pt-br').format(new Date(d));
};

export default formatDate;
