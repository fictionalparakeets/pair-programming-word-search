const wordSearch = (letters, word) => {
    if (letters.length === 0) return 'empty array';
    // console.log(letters.length);

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    
    const horizontalJoinReverse = letters.map(rs => rs.reverse().join(''));
    for (w of horizontalJoinReverse) {
        if (w.includes(word)) return true
    }


    const lettersTransposed = transpose(letters);
    const verticalJoin = lettersTransposed.map(ls => ls.join(''))
    
    for (h of verticalJoin) {
        if (h.includes(word)) return true
        
    }
    
    const verticalJoinReverse = lettersTransposed.map(rs => rs.reverse().join(''));
    for (v of verticalJoinReverse) {
        if (v.includes(word)) return true
    }
    
    return false;
}

const transpose = function(matrix) {
    let newArr = [];
    for (let values = 0; values < matrix[0].length; values++) {
      newArr.push([]);
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        newArr[j][i] = matrix[i][j];
      }
    }
    return newArr;
};
  

module.exports = wordSearch


