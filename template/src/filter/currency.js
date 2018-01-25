const digitsRE = /(\d{3})(?=\d)/g;

export default function (oldvalue, oldcurrency, olddecimals) {
  const value = parseFloat(oldvalue);
  if (!isFinite(value) || (!value && value !== 0)) return '';
  const currencyed = oldcurrency != null ? oldcurrency : '$';
  const decimalsed = olddecimals != null ? olddecimals : 2;
  const stringified = Math.abs(value).toFixed(decimalsed);
  const qint = decimalsed
    ? stringified.slice(0, -1 - decimalsed)
    : stringified;
  const i = qint.length % 3;
  const head = i > 0
    ? (qint.slice(0, i) + (qint.length > 3 ? ',' : ''))
    : '';
  const qfloat = decimalsed
    ? stringified.slice(-1 - decimalsed)
    : '';
  const sign = value < 0 ? '-' : '';
  return sign + currencyed + head +
    qint.slice(i).replace(digitsRE, '$1,') +
    qfloat;
}
