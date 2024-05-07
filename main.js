class MatrixCalculator {
    constructor() {
        this.matrixA = [];
        this.matrixB = [];
        this.Arows = 3;
        this.Acolumns = 3;
        this.Brows = 3;
        this.Bcolumns = 3;
    }
}

/*
Formulae for working with matrices:

Addition:
[1 2]   +   [5 6]   =   [ 6 8 ]         
[3 4]       [7 8]       [10 12]

Subtraction:
[5 6]   -   [1 2]   =   [4 4]
[7 8]       [3 4]       [4 4]

Multiplication:
# (row[i] * column[i]) + (row[i+1] * column[i+1])
[a b]   *   [e f]   =   [ae + bg | af + bh]
[c d]       [g h]       [ce + dg | cf + dh]

*/