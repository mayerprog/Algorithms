const fs = require('fs');

let data = fs.readFileSync('01 (2).txt', 'utf8');
let testCase = data.split(', ')

const findClub = (testCase) => {
    let route = {x: 0, y: 0}
    let view = 'viewToNorth'
    let allSteps = []
    let allStepsWithoutKeys = []
    let noDuplicate = new Set()
    let result


    for (let i = 0; i < testCase.length; i++) {
        
        switch (view) {
            case 'viewToNorth': 
                if (testCase[i][0] === 'L') {
                    for (let j = 1; j <= testCase[i][1]; j++) {
                        route.x = route.x - 1

                        allSteps.push({...route})

                    }
                    view = 'viewToWest'
                    continue
                }
                else {
                    for (let j = 1; j <= testCase[i][1]; j++) {
                        route.x = route.x + 1

                        allSteps.push({...route})
                    }
                    view = 'viewToEast'
                    continue
                }
            case 'viewToSouth':
                if (testCase[i][0] === 'L') {
                    for (let j = 1; j <= testCase[i][1]; j++) {
                        route.x = route.x + 1

                        allSteps.push({...route})
                    }
                    view = 'viewToEast'
                    continue
                }
                else {
                    for (let j = 1; j <= testCase[i][1]; j++) {
                        route.x = route.x - 1
                        
                        allSteps.push({...route})
                    }
                    view = 'viewToWest'
                    continue
                }

            case 'viewToEast':
                if (testCase[i][0] === 'L') {
                    for (let j = 1; j <= testCase[i][1]; j++) {
                        route.y = route.y + 1
                       
                        allSteps.push({...route})
                    }
                    view = 'viewToNorth'
                    continue
                }
                else {
                    for (let j = 1; j <= testCase[i][1]; j++) {
                        route.y = route.y - 1

                        allSteps.push({...route})
                    }
                    view = 'viewToSouth'
                    continue
                }

            case 'viewToWest':
                if (testCase[i][0] === 'L') {
                    for (let j = 1; j <= testCase[i][1]; j++) {
                        route.y = route.y - 1
                       
                        allSteps.push({...route})
                    }
                    view = 'viewToSouth'
                    continue
                }
                else {
                    for (let j = 1; j <= testCase[i][1]; j++) {
                        route.y = route.y + 1

                        allSteps.push({...route})
                    }
                    view = 'viewToNorth'
                    continue
                }

        }
        
    }

    allStepsWithoutKeys = allSteps.map(item => item.x + ', ' + item.y)

    allStepsWithoutKeys.map((element) => {
        if (noDuplicate.has(element)) {
            let elArr = element.split(', ')
            result = Math.abs(elArr[0]) + Math.abs(elArr[1])
        }
        else {
            noDuplicate.add(element)
        }
    })

    return result
}

console.log(findClub(testCase))

// console.log(findClub(['L1', 'L3', 'L5', 'L3', 'R1', 'L4', 'L5', 'R1', 'R1', 'R1']))
//console.log(findClub(['R8', 'R4', 'R4', 'R8']))

