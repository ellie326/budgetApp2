//
//  app.js
//  budget app (2)
//
//  Created by ellie on 9/11/26.
//

// 수입 - 투자 = 목표 지출 계산
function calculateGoal() {
  const income = Number(document.getElementById('income-input').value) || 0;
  const invest = Number(document.getElementById('invest-input').value) || 0;
  const target = income - invest;
  
  document.getElementById('target-expense').innerText = `${target.toLocaleString()}원`;
}

// 간단한 달력 셀 생성 예시
function renderCalendar() {
  const grid = document.getElementById('calendar-grid');
  grid.innerHTML = '';
  
  for (let day = 1; day <= 30; day++) {
    const cell = document.createElement('div');
    cell.className = 'day-cell';
    cell.innerHTML = `
      <span class="day-num">${day}일</span>
      <span class="goal-amt">목표: 3만</span>
      <span class="curr-amt">1.5만</span>
    `;
    grid.appendChild(cell);
  }
}

document.addEventListener('DOMContentLoaded', renderCalendar);
