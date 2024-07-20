import fs from 'fs'
import csv from 'csv-parser';

let cityandcontry = []
let femaleFirstName = []
let maleFirstName = []
let surname = []
let mobileNumber = []

let indexCityandcontry = 47869 - 2
let indexFemaleFirstName = 15352 - 2
let indexMaleFirstName = 14822 - 2
let indexSurname = 1387 - 2
let indexMobileNumber = 2775 - 2


//reading and rewriting to array
fs.createReadStream('./data/cityandcontry.csv')
    .pipe(csv())
    .on('data', (row) => {
        cityandcontry.push(row);
    })
    .on('end', () => {
        console.log('cityandcontry.csv file reading completed.');
    });


fs.createReadStream('./data/female_first_name.csv')
    .pipe(csv())
    .on('data', (row) => {
        femaleFirstName.push(row);
    })
    .on('end', () => {
        console.log('female_first_name.csv file reading completed.');
    });


fs.createReadStream('./data/male_first_name.csv')
    .pipe(csv())
    .on('data', (row) => {
        maleFirstName.push(row);
    })
    .on('end', () => {
        console.log('male_first_name.csv file reading completed.');
    });


fs.createReadStream('./data/surname.csv')
    .pipe(csv())
    .on('data', (row) => {
        surname.push(row);
    })
    .on('end', () => {
        console.log('surname.csv file reading completed.');
    });


fs.createReadStream('./data/mobile_number.csv')
    .pipe(csv())
    .on('data', (row) => {
        mobileNumber.push(row);
    })
    .on('end', () => {
        console.log('mobile_number.csv file reading completed.');
    });



    
let randomIndex = (endIndex) => {
    const randomIndexValue = Math.floor(Math.random() * endIndex);
    return randomIndexValue
}
let random = (type) => {
    if (type === "address") {
        let randomValue = randomIndex(indexCityandcontry)
        return cityandcontry[randomValue]
    }
    else if (type === "city") {
        let randomValue = randomIndex(indexCityandcontry)
        let randomAddress = cityandcontry[randomValue]
        return randomAddress.City
    }
    else if (type === "country") {
        let randomValue = randomIndex(indexCityandcontry)
        let randomAddress = cityandcontry[randomValue]
        return randomAddress.Country

    }
    else if (type === "email") {
        let randomValue1 = randomIndex(indexMaleFirstName)
        let randomValue2 = randomIndex(indexSurname)
        let randomValue3 = randomIndex(50000)
        randomValue3 = String(randomValue3)
        let email = maleFirstName[randomValue1].malename + surname[randomValue2].caste + randomValue3 + "@gmail.com"
        return email
    }
    else if (type === "mobile") {
        let randomValue = randomIndex(indexMobileNumber)
        let mobileNo=mobileNumber[randomValue].mobile
        return Number(mobileNo)
    }
    else if (type === "myname") {
        let randomValue1 = randomIndex(indexMaleFirstName)
        let randomValue2 = randomIndex(indexSurname) 
        let myName=maleFirstName[randomValue1].malename+ " " + surname[randomValue2].caste
        return myName
    }
    else if (type === "pin") {
        let randomValue = randomIndex(indexMobileNumber)
        let pinCode = mobileNumber[randomValue].mobile
        let pin = pinCode.slice(1, 7)
        return Number(pin)
    }
    else if (type === "password") {
        let randomValue1 = randomIndex(indexMaleFirstName)
        let randomValue2 = randomIndex(indexSurname)
        let randomValue3 = randomIndex(500000)
        randomValue3 = String(randomValue3)
        let password = "#" + maleFirstName[randomValue1].malename + surname[randomValue2].caste + "@" + randomValue3
        return password
    }
    else { return 1 }
}


export default random