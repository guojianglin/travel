let defaultCity = '上海'
try {
  defaultCity = localStorage.city || '上海'
} catch (err) {
}
export default {
  city: defaultCity
}
