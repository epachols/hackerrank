// Complete the kangaroo function below.
// NOTE THAT x1 WILL ALWAYS be less than x2 

function kangaroo(x1, v1, x2, v2) {
    //in either of these cases, total fail.
if (v1===v2 || v1<v2) {
    return "NO";
}
else if (
    (x1-x2)%(v2-v1) === 0 ||
    // taking care of both velocity inequalities compared with x position inequalities
    (x1-x2)%(v1-v2) === 0
) {
    return ("YES")
    // in all other cases, return no, becaues only "they will meet" conditions have not been met.
} else {
    return "NO";
}
}


