function Growls(object) {
  this.name = object.name;
  Growls.all.push(this);
};


Growls.all = [];









module.exports = Growls;
