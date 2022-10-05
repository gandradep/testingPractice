const strLength = (string) => {
  if (string.length ===0) {
    return 0;
  } else if (string.length >10) {
    return 'too big';
  }else {
    return string.length;
  }

};


module.exports = strLength;
