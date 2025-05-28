// Коэффициенты для тепловой энергии (в Джоули)
const energyFactors = {
    GJ: 1e9,
    MJ: 1e6,
    kWh: 3.6e6,
    Mcal: 4.184e6,
    Gcal: 4.184e9
};

// Коэффициенты для давления (в Паскали)
const pressureFactors = {
    MPa: 1e6,
    kPa: 1e3,
    kgf_cm2: 98066.5,
    bar: 1e5,
    atm: 101325,
    psi: 6894.76
};

// Функции для температуры
function convertTemperature() {
    const from = document.getElementById('tempFrom').value;
    const to = document.getElementById('tempTo').value;
    const value = parseFloat(document.getElementById('tempValue').value);
    
    if (isNaN(value)) {
        document.getElementById('tempResult').textContent = 'Введите корректное число';
        return;
    }
    
    // Конвертируем в Кельвины как базовую единицу
    let kelvin;
    switch (from) {
        case 'C': kelvin = value + 273.15; break;
        case 'F': kelvin = (value - 32) * 5/9 + 273.15; break;
        case 'K': kelvin = value; break;
        case 'R': kelvin = value * 5/9; break;
    }
    
    // Конвертируем из Кельвинов в целевую единицу
    let result;
    switch (to) {
        case 'C': result = kelvin - 273.15; break;
        case 'F': result = (kelvin - 273.15) * 9/5 + 32; break;
        case 'K': result = kelvin; break;
        case 'R': result = kelvin * 9/5; break;
    }
    
    document.getElementById('tempResult').textContent = `${value} ${getTempUnitName(from)} = ${result.toFixed(4)} ${getTempUnitName(to)}`;
}

function getTempUnitName(unit) {
    const names = {
        'C': '°C',
        'F': '°F',
        'K': 'K',
        'R': '°R'
    };
    return names[unit];
}

// Функция для тепловой энергии
function convertEnergy() {
    const from = document.getElementById('energyFrom').value;
    const to = document.getElementById('energyTo').value;
    const value = parseFloat(document.getElementById('energyValue').value);
    
    if (isNaN(value)) {
        document.getElementById('energyResult').textContent = 'Введите корректное число';
        return;
    }
    
    const result = (value * energyFactors[from]) / energyFactors[to];
    document.getElementById('energyResult').textContent = `${value} ${getEnergyUnitName(from)} = ${result.toFixed(6)} ${getEnergyUnitName(to)}`;
}

function getEnergyUnitName(unit) {
    const names = {
        'GJ': 'ГДж',
        'MJ': 'МДж',
        'kWh': 'кВт·ч',
        'Mcal': 'Мкал',
        'Gcal': 'Гкал'
    };
    return names[unit];
}

// Функция для давления
function convertPressure() {
    const from = document.getElementById('pressureFrom').value;
    const to = document.getElementById('pressureTo').value;
    const value = parseFloat(document.getElementById('pressureValue').value);
    
    if (isNaN(value)) {
        document.getElementById('pressureResult').textContent = 'Введите корректное число';
        return;
    }
    
    const result = (value * pressureFactors[from]) / pressureFactors[to];
    document.getElementById('pressureResult').textContent = `${value} ${getPressureUnitName(from)} = ${result.toFixed(6)} ${getPressureUnitName(to)}`;
}

function getPressureUnitName(unit) {
    const names = {
        'MPa': 'МПа',
        'kPa': 'кПа',
        'kgf_cm2': 'кгс/см²',
        'bar': 'бар',
        'atm': 'атм',
        'psi': 'psi'
    };
    return names[unit];
}