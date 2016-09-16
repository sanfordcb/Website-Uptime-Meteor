Date.prototype.addDays = function(days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
};

export default function(num) {
  let startDate = new Date();
  let resultDate = startDate.addDays(num * -1);
  return resultDate.toISOString();
}
