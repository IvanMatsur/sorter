class Sorter {
  constructor() {
    this.elements = [];
    this.comparator;
  }

  add(element) {
    this.elements.push(element);
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
   return this.elements.length;
  }

  toArray() {
    return this.elements.slice();
  }

  sort(indices) {
    var tempArr = [];
    indices.sort(( a, b ) =>  a - b);

    for(var i = 0; i < indices.length; i++) {
      tempArr.push(this.elements[indices[i]]);
    }

    if(typeof this.comparator == 'undefined') {
      tempArr.sort(( a, b ) =>  a - b);
    } else {
      tempArr.sort(this.comparator);
    }
    
    for(var i = 0; i < tempArr.length; i++) {
      this.elements[indices[i]] = tempArr[i];
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;