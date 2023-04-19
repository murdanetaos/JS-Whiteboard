function removeSpaces(str){
   return str.split(' ').join('')
};

const employeeName = 'Miguel Urdaneta';
const newEmpName = removeSpaces(employeeName);

console.log(newEmpName);
