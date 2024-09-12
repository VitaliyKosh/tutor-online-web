import './index.css';

const INFO_BLOCK_ID = 'info-block';
const INFO_BLOCK_CLOSE_BUTTON_ID = 'info-block-close-button';
const INFO_BLOCK_VALUES_ID = 'info-block-values';
const INFO_BLOCK_CONSOLE_ID = 'info-block-console';
export const LS_INFO_BLOCK_KEY = 'info-block-visible';

let logValues: Record<string, string> = {};
let logLines: string[] = [];

const readLSInfoBlockVisible = () => {
    const isVisible = localStorage.getItem(LS_INFO_BLOCK_KEY);
    return Boolean(JSON.parse(isVisible ?? 'false'));
};

const writeLSInfoBlockVisible = (isVisible: boolean) => {
    localStorage.setItem(LS_INFO_BLOCK_KEY, JSON.stringify(isVisible));
};

const drawValues = () => {
    const valuesElement = document.getElementById(INFO_BLOCK_VALUES_ID)!;
    valuesElement.innerHTML = Object.entries(logValues)
        .map(([key, value]) => `<div>${key}: ${value}</div>`)
        .join('');
};

const drawInfo = () => {
    const consoleElement = document.getElementById(INFO_BLOCK_CONSOLE_ID)!;
    consoleElement.innerHTML = logLines.map((line) => `<div>${line}</div>`).join('');
};

const addLogLine = (string: string) => {
    logLines.unshift(string);
    drawInfo();
};

const log = (...data: (string | number | boolean | null | undefined | object)[]) => {
    if (!readLSInfoBlockVisible()) {
        return;
    }

    const stringContent = data
        .map((value) => {
            if (typeof value === 'object') {
                return JSON.stringify(value);
            } else {
                return value;
            }
        })
        .join(', ');

    addLogLine(stringContent);

    console.log(data);
};

const logValue = (
    key: string,
    value: string | boolean | number | null | undefined,
    toWebConsole: boolean = true,
) => {
    if (!readLSInfoBlockVisible()) {
        return;
    }

    if (value === undefined) {
        delete logValues[key];
    } else if (value === null) {
        logValues[key] = 'null';
    } else {
        logValues[key] = value.toString();
    }

    drawValues();

    if (toWebConsole !== false) {
        console.log(key, value);
    }
};

const initInfoBlock = () => {
    if (!readLSInfoBlockVisible()) {
        return;
    }

    let isOpen = false;

    const existingInfoElement = document.getElementById(INFO_BLOCK_ID);

    if (existingInfoElement) {
        return;
    }

    const infoElement = document.createElement('div');
    const closeButton = document.createElement('div');
    const valuesElement = document.createElement('div');
    const consoleElement = document.createElement('div');

    infoElement.id = INFO_BLOCK_ID;
    infoElement.classList.add('closed');
    infoElement.addEventListener('dblclick', () => {
        logLines = [];
        logValues = {};
        drawInfo();
        drawValues();
    });
    document.querySelector('body')?.appendChild(infoElement);

    const toggleVisibility = () => {
        if (isOpen) {
            isOpen = false;
            closeButton.textContent = '<';
            infoElement.classList.add('closed');
        } else {
            closeButton.textContent = '>';
            isOpen = true;
            infoElement.classList.remove('closed');
        }
    };

    closeButton.id = INFO_BLOCK_CLOSE_BUTTON_ID;
    closeButton.textContent = '<';
    closeButton.addEventListener('click', toggleVisibility);
    infoElement.appendChild(closeButton);

    valuesElement.id = INFO_BLOCK_VALUES_ID;
    infoElement.appendChild(valuesElement);

    consoleElement.id = INFO_BLOCK_CONSOLE_ID;
    infoElement.appendChild(consoleElement);
};

const showInfoBlock = () => {
    writeLSInfoBlockVisible(true);
    initInfoBlock();
};

const hideInfoBlock = () => {
    writeLSInfoBlockVisible(false);
    const existingInfoElement = document.getElementById(INFO_BLOCK_ID);
    existingInfoElement?.parentElement?.removeChild(existingInfoElement);
    logLines = [];
    logValues = {};
};

export const info = {
    log,
    logValue,
    initInfoBlock,
    showInfoBlock,
    hideInfoBlock,
};
