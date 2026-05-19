// App details content
const appDetails = {
    'kakao-t': {
        'en': {
            title: 'How to use Kakao T 🚕',
            content: `
                <p>Kakao T is your go-to app for calling taxis quickly in Korea. Follow these steps:</p>
                <ol>
                    <li><strong>Change Language:</strong> Set the app language to English in the app settings.</li>
                    <li><strong>Set Pickup Location:</strong> Open the app and it will auto-detect your current location. Adjust the pin if necessary.</li>
                    <li><strong>Set Destination:</strong> Enter your destination in Korean or English (Korean is recommended for accuracy).</li>
                    <li><strong>Select Taxi Type:</strong> Choose from General, Blue (premium), or Venti (large). 'General' is the most common and affordable.</li>
                    <li><strong>Payment Method:</strong> You can pay to the driver directly (Pay to Driver) using cash/card, or register a card in the app for automatic payment.</li>
                    <li><strong>Call & Wait:</strong> Press 'Call' and watch the taxi approach on the map in real-time.</li>
                </ol>
            `
        },
        'ko': {
            title: '카카오 T 사용법 🚕',
            content: `
                <p>카카오 T는 한국에서 택시를 부를 때 가장 많이 쓰이는 앱입니다. 다음 단계를 따라해보세요:</p>
                <ol>
                    <li><strong>언어 변경:</strong> 앱 설정에서 언어를 영어로 변경하세요.</li>
                    <li><strong>출발지 설정:</strong> 앱을 열면 현재 위치가 자동으로 설정됩니다. 필요하다면 핀을 이동시켜 조정하세요.</li>
                    <li><strong>도착지 설정:</strong> 도착지를 입력하세요. (정확도를 위해 한국어 입력을 권장합니다.)</li>
                    <li><strong>택시 종류 선택:</strong> 일반, 블루(프리미엄), 벤티(대형) 중 선택하세요. '일반'이 가장 저렴하고 흔합니다.</li>
                    <li><strong>결제 방법:</strong> 기사님께 직접 결제(현금/카드)하거나 앱에 카드를 등록해 자동 결제를 할 수 있습니다.</li>
                    <li><strong>호출 및 대기:</strong> '호출'을 누르고 지도에서 택시가 실시간으로 다가오는 것을 확인하세요.</li>
                </ol>
            `
        }
    },
    'kakao-bus': {
        'en': {
            title: 'How to use Kakao Bus 🚌',
            content: `
                <p>Master the complex bus routes in Korea using Kakao Bus:</p>
                <ol>
                    <li><strong>Change Language:</strong> Set the app language to English in the app settings.</li>
                    <li><strong>Search for Stops or Routes:</strong> Type the bus number or the bus stop name in the search bar.</li>
                    <li><strong>Real-time Arrivals:</strong> Check exactly how many minutes are left until your bus arrives and how crowded it is.</li>
                    <li><strong>Set Alarms:</strong> You can set an alarm to notify you when the bus is approaching your stop or when you need to get off.</li>
                    <li><strong>Favorites:</strong> Save your daily commute routes and stops by pressing the star icon.</li>
                </ol>
                <br>
                <h3>💡 T-money (Bus Card) Recharge Guide</h3>
                <ul>
                    <li><strong>Convenience Stores:</strong> Recharge with cash at any convenience store (CU, GS25, 7-Eleven).</li>
                    <li><strong>Subway Stations:</strong> Use the card reload machines (Cash only).</li>
                    <li><strong>Mobile Apps:</strong> T-money Pay app supports recharging via Korean bank accounts.</li>
                </ul>
            `
        },
        'ko': {
            title: '카카오 버스 사용법 🚌',
            content: `
                <p>카카오 버스를 이용해 복잡한 한국 버스 노선을 마스터하세요:</p>
                <ol>
                    <li><strong>언어 변경:</strong> 앱 설정에서 언어를 영어로 변경하세요.</li>
                    <li><strong>정류장 또는 노선 검색:</strong> 검색창에 버스 번호나 정류장 이름을 입력하세요.</li>
                    <li><strong>실시간 도착 정보:</strong> 버스가 도착하기까지 몇 분이 남았는지, 얼마나 혼잡한지 정확히 확인하세요.</li>
                    <li><strong>알람 설정:</strong> 버스가 정류장에 접근하거나 내릴 때 알려주는 알람을 설정할 수 있습니다.</li>
                    <li><strong>즐겨찾기:</strong> 별표 아이콘을 눌러 매일 이용하는 출퇴근 경로나 정류장을 저장하세요.</li>
                </ol>
                <br>
                <h3>💡 교통카드 충전 가이드</h3>
                <ul>
                    <li><strong>편의점:</strong> 전국 모든 편의점(CU, GS25, 세븐일레븐 등)에서 현금으로 충전 가능합니다.</li>
                    <li><strong>지하철역:</strong> 지하철 역사 내 교통카드 충전기를 이용하세요. (현금 전용)</li>
                    <li><strong>모바일 앱:</strong> 티머니페이 등의 앱을 통해 계좌 이체로 충전할 수 있습니다.</li>
                </ul>
            `
        }
    },
    'kakao-map': {
        'en': {
            title: 'How to use Kakao Map 🗺️',
            content: `
                <p>For navigating from point A to point B using multiple transit methods:</p>
                <ol>
                    <li><strong>Change Language:</strong> Set the app language to English in the app settings.</li>
                    <li><strong>Find Directions:</strong> Enter your starting point and destination.</li>
                    <li><strong>Choose Transit Mode:</strong> Select the public transit icon (train/bus) to see the best routes.</li>
                    <li><strong>Compare Routes:</strong> The app will show multiple options (fastest, least walking, least transfers).</li>
                    <li><strong>Step-by-step Navigation:</strong> Follow the real-time location tracker to know exactly when to transfer or get off.</li>
                </ol>
            `
        },
        'ko': {
            title: '카카오 맵 사용법 🗺️',
            content: `
                <p>다양한 대중교통을 이용하여 출발지에서 목적지까지 이동할 때:</p>
                <ol>
                    <li><strong>언어 변경:</strong> 앱 설정에서 언어를 영어로 변경하세요.</li>
                    <li><strong>길 찾기:</strong> 출발지와 목적지를 입력하세요.</li>
                    <li><strong>교통수단 선택:</strong> 대중교통 아이콘(기차/버스)을 선택하여 최적의 경로를 확인하세요.</li>
                    <li><strong>경로 비교:</strong> 앱이 여러 옵션(최단 시간, 최소 도보, 최소 환승)을 보여줍니다.</li>
                    <li><strong>단계별 안내:</strong> 실시간 위치 추적기를 통해 환승하거나 내려야 할 시점을 정확히 파악하세요.</li>
                </ol>
            `
        }
    }
};

// DOM Elements
const cards = document.querySelectorAll('.card');
const detailSection = document.getElementById('detail-section');
const contentContainer = document.getElementById('content-container');
const backBtn = document.getElementById('back-btn');
const appSelection = document.querySelector('.app-selection');

const tabBtns = document.querySelectorAll('.tab-btn');
const csvTableContainer = document.getElementById('csv-table-container');

const themeToggle = document.getElementById('theme-toggle');
const langKoBtn = document.getElementById('lang-ko');
const langEnBtn = document.getElementById('lang-en');

// State
let currentTab = 'fares';
let csvData = [];
let currentLang = 'en'; // 'en' or 'ko'
let isLightMode = true;
let currentAppId = null;

// Controls Event Listeners
themeToggle.addEventListener('click', () => {
    isLightMode = !isLightMode;
    if (isLightMode) {
        document.body.classList.add('light-mode');
        themeToggle.innerText = '🌙 Dark';
    } else {
        document.body.classList.remove('light-mode');
        themeToggle.innerText = '☀️ Light';
    }
});

langKoBtn.addEventListener('click', () => {
    if (currentLang !== 'ko') {
        currentLang = 'ko';
        updateLanguage();
    }
});

langEnBtn.addEventListener('click', () => {
    if (currentLang !== 'en') {
        currentLang = 'en';
        updateLanguage();
    }
});

function updateLanguage() {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        el.innerHTML = el.getAttribute(`data-${currentLang}`);
    });

    // Update details if open
    if (currentAppId) {
        showDetails(currentAppId);
    }
    
    // Update table data
    loadCSVData();
}

// Event Listeners for Cards
cards.forEach(card => {
    card.addEventListener('click', () => {
        currentAppId = card.getAttribute('data-app');
        showDetails(currentAppId);
    });
});

backBtn.addEventListener('click', hideDetails);

// Event Listeners for Tabs
tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        tabBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentTab = e.target.getAttribute('data-tab');
        renderTable();
    });
});

// Functions
function showDetails(appId) {
    const data = appDetails[appId][currentLang];
    contentContainer.innerHTML = `
        <h2>${data.title}</h2>
        ${data.content}
    `;
    appSelection.classList.add('hidden');
    appSelection.style.display = 'none';
    detailSection.classList.remove('hidden');
    // window.scrollTo({ top: detailSection.offsetTop - 50, behavior: 'smooth' }); // Optional auto-scroll
}

function hideDetails() {
    currentAppId = null;
    detailSection.classList.add('hidden');
    appSelection.style.display = 'block';
    setTimeout(() => {
        appSelection.classList.remove('hidden');
    }, 10);
}

// Hardcoded Data (replaces fetching from data.csv to avoid CORS issues locally)
const tableDataEn = [
    { Type: 'fares', City: 'Iksan', Transportation: 'City Bus', 'Card Fare': '1650 KRW', 'Cash Fare': '1700 KRW', Notes: '' },
    { Type: 'fares', City: 'Jeonju', Transportation: 'City Bus', 'Card Fare': '1500 KRW', 'Cash Fare': '1600 KRW', Notes: '' },
    { Type: 'fares', City: 'Seoul', Transportation: 'City Bus', 'Card Fare': '1500 KRW', 'Cash Fare': '1600 KRW', Notes: '' },
    { Type: 'fares', City: 'Busan', Transportation: 'City Bus', 'Card Fare': '1550 KRW', 'Cash Fare': '1700 KRW', Notes: '' },
    { Type: 'fares', City: 'Daegu', Transportation: 'City Bus', 'Card Fare': '1500 KRW', 'Cash Fare': '1600 KRW', Notes: '' },
    { Type: 'fares', City: 'Incheon', Transportation: 'City Bus', 'Card Fare': '1500 KRW', 'Cash Fare': '1600 KRW', Notes: '' },
    { Type: 'fares', City: 'Gwangju', Transportation: 'City Bus', 'Card Fare': '1450 KRW', 'Cash Fare': '1550 KRW', Notes: '' },
    { Type: 'fares', City: 'Daejeon', Transportation: 'City Bus', 'Card Fare': '1500 KRW', 'Cash Fare': '1600 KRW', Notes: '' },
    { Type: 'transfer', Method: 'Bus to Bus', 'Time Limit': '30 minutes', Conditions: 'Must tap card when getting off', Exceptions: 'Cannot transfer to the same bus number', Benefit: 'Free or discounted fare' },
    { Type: 'transfer', Method: 'Bus to Subway', 'Time Limit': '30 minutes', Conditions: 'Must tap card when getting off', Exceptions: 'Valid for up to 4 transfers (5 rides total)', Benefit: 'Free or discounted fare' },
    { Type: 'transfer', Method: 'Subway to Subway', 'Time Limit': 'N/A', Conditions: 'Transfers happen inside the station without tapping out', Exceptions: 'Once you tap out you cannot re-enter for free', Benefit: 'Free' },
    { Type: 'transfer', Method: 'Late Night', 'Time Limit': '60 minutes', Conditions: 'Applies between 21:00 and 07:00 next day', Exceptions: 'Same rules as daytime transfers apply', Benefit: 'Extended transfer time' }
];

const tableDataKo = [
    { Type: 'fares', '도시': '익산', '교통수단': '일반버스', '카드 요금': '1650원', '현금 요금': '1700원', '비고': '' },
    { Type: 'fares', '도시': '전주', '교통수단': '일반버스', '카드 요금': '1500원', '현금 요금': '1600원', '비고': '' },
    { Type: 'fares', '도시': '서울', '교통수단': '일반버스', '카드 요금': '1500원', '현금 요금': '1600원', '비고': '' },
    { Type: 'fares', '도시': '부산', '교통수단': '일반버스', '카드 요금': '1550원', '현금 요금': '1700원', '비고': '' },
    { Type: 'fares', '도시': '대구', '교통수단': '일반버스', '카드 요금': '1500원', '현금 요금': '1600원', '비고': '' },
    { Type: 'fares', '도시': '인천', '교통수단': '일반버스', '카드 요금': '1500원', '현금 요금': '1600원', '비고': '' },
    { Type: 'fares', '도시': '광주', '교통수단': '일반버스', '카드 요금': '1450원', '현금 요금': '1550원', '비고': '' },
    { Type: 'fares', '도시': '대전', '교통수단': '일반버스', '카드 요금': '1500원', '현금 요금': '1600원', '비고': '' },
    { Type: 'transfer', '항목': '버스 간 환승', '제한시간': '30분', '조건': '하차 시 카드 태그 필수', '예외사항': '동일 노선 버스 환승 불가', '혜택': '무료 또는 할인' },
    { Type: 'transfer', '항목': '버스 ↔ 지하철', '제한시간': '30분', '조건': '하차 시 카드 태그 필수', '예외사항': '최대 4회 환승 가능 (총 5회 탑승)', '혜택': '무료 또는 할인' },
    { Type: 'transfer', '항목': '지하철 간 환승', '제한시간': '해당 없음', '조건': '역 내부에서 개찰구를 나가지 않고 환승', '예외사항': '개찰구를 나간 후 재입장 시 요금 부과', '혜택': '무료' },
    { Type: 'transfer', '항목': '심야 시간', '제한시간': '60분', '조건': '21:00 ~ 익일 07:00 적용', '예외사항': '주간 환승과 동일한 규칙 적용', '혜택': '환승 시간 연장' }
];

function loadCSVData() {
    csvData = currentLang === 'en' ? tableDataEn : tableDataKo;
    renderTable();
}

function renderTable() {
    if (!csvData || csvData.length === 0) return;

    // Filter data based on current tab
    const filteredData = csvData.filter(row => row.Type === currentTab);

    if (filteredData.length === 0) {
        csvTableContainer.innerHTML = '<p style="padding: 20px;">No data available for this category.</p>';
        return;
    }

    // Get headers from first object, ignoring 'Type'
    const headers = Object.keys(filteredData[0]).filter(h => h !== 'Type' && h !== '');

    let html = '<table><thead><tr>';
    headers.forEach(h => {
        html += `<th>${h}</th>`;
    });
    html += '</tr></thead><tbody>';

    filteredData.forEach(row => {
        html += '<tr>';
        headers.forEach(h => {
            html += `<td>${row[h] || ''}</td>`;
        });
        html += '</tr>';
    });

    html += '</tbody></table>';
    csvTableContainer.innerHTML = html;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadCSVData();
    // Start with English by default (attributes are already initialized to English in HTML)
});
