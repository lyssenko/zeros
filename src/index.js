module.exports = function zeros(expression) {
    let a = expression.split('*'),
        i,
        summ2 = 0,
        summ5 = 0,
        factorialis = [],
        dublFactorialisNeChet = [],
        dublFactorialisChet = [];

    for (i = 0; i < a.length; i++) {
        if (a[i].slice(a[i].indexOf('!'), a[i].length) == '!') {
            factorialis.push(a[i].slice(0, a[i].indexOf('!')));
        } else if ((a[i].slice(0, a[i].indexOf('!'))) % 2 == true) {
            dublFactorialisNeChet.push(a[i].slice(0, a[i].indexOf('!')));
        } else {
            dublFactorialisChet.push(a[i].slice(0, a[i].indexOf('!')));
        }
    }

    for (i = 0; i < factorialis.length; i++) {
        while (factorialis[i] > 0) {
            if (factorialis[i] % 2 == 0) {
                summ2 = summ2 + 1;
            }
            if (factorialis[i] % 5 == 0) {
                summ5 = summ5 + 1;
            }
            if (factorialis[i] % 25 == 0) {
                summ5 = summ5 + 1;
            }
            factorialis[i] = factorialis[i] - 1;
        }
    }

    for (i = 0; i < dublFactorialisChet.length; i++) {
        while (dublFactorialisChet[i] > 0) {
            if (dublFactorialisChet[i] % 2 == 0) {
                summ2 = summ2 + 1;
            }
            if (dublFactorialisChet[i] % 5 == 0) {
                summ5 = summ5 + 1;
            }
            if (dublFactorialisChet[i] % 25 == 0) {
                summ5 = summ5 + 1;
            }
            dublFactorialisChet[i] = dublFactorialisChet[i] - 2;
        }
    }

    for (i = 0; i < dublFactorialisNeChet.length; i++) {
        while (dublFactorialisNeChet[i] > 0) {
            if (dublFactorialisNeChet[i] % 5 == 0) {
                summ5 = summ5 + 1;
            }
            if (dublFactorialisNeChet[i] % 25 == 0) {
                summ5 = summ5 + 1;
            }
            dublFactorialisNeChet[i] = dublFactorialisNeChet[i] - 2;
        }
    }

    return Math.min(summ5, summ2);
};