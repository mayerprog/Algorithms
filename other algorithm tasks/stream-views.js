// на сайте есть видео стрим, который смотрят пользователи.
// на входе массив пар, который показывает когда каждый человек подключился, и когда отключился.
// Пример: [[1, 2], [1, 4], [2, 3]]
// В этом примере 3 пользователя.
// Вернуть максимальное число людей, которые смотрели стрим одновременно
// ответ - 3 (на 2й минуте)
// [[100, 200], [100, 400], [150, 300], [500, 600]]

const countPeople = (arg) => {
    let arr = []
    let count = 0
    let maxCount = 0

    for (let i = 0; i < arg.length; i++) {
        arr.push(['start', arg[i][0]])
        arr.push(['end', arg[i][1]])
    }
    
    arr.sort((a,b) => a[1]-b[1])
    
    for (let j = 0; j < arr.length; j++) {
        if(arr[j][0] === 'start') {
            count++
            if(count>maxCount){
                maxCount=count
            }
        }
        else {
            count--
        }
    }
    
    return maxCount
}

console.log(countPeople([[100, 200], [100, 400], [150, 300], [500, 600]]))